import mongodb from 'mongodb';
import moment from 'moment';
import Promise from 'bluebird';
import uuid from 'uuid/v4';

const url = 'mongodb://localhost:27017';
const dbName = 'gomoku';
let db = null;

const getDb = () => {
    if (db) {
        return new Promise((resolve) => resolve(db))
    }
    return mongodb.connect(url, { useNewUrlParser: true }).then((client) => {
        db = client.db(dbName);
        return db;
    }).catch(console.warn);
};

const getMatchData = (playerId) => { // express
    return getDb().then((db) => {
        const matchCollection = db.collection('match_history');

        return matchCollection.find({
            player_id: playerId
        }).toArray();
    }).catch(console.warn);
};

const getPlayer = (username) => {
    return getDb().then((db) => {
        const collection = db.collection('players');

        return collection.find({
            username
        }).toArray();
    }).catch(console.warn);
}

const getAllPlayers = () => {
    return getDb().then((db) => {
        const collection = db.collection('players');
        return collection.find({}).toArray();
    })
}

const successWrapper = (response) => {
    return {
        success: true,
        data: response
    };
}

const failureWrapper = (error) => {
    return {
        success: false,
        error: error.message
    };
}

// ------------------------------------------------ public methods

export async function createUser(username) { // rabbit, tested
    const player = await getPlayer(username);
    if (player.length) {
        return failureWrapper(new Error('username already exists'));
    }
    return getDb().then((db) => {
        const collection = db.collection('players');
        const matchCollection = db.collection('match_history');
        const id = uuid();

        return collection.insertOne({
            username,
            id,
            last_online: new Date()
        }).then(() => {
            matchCollection.insertMany([
                {
                    player_id: id,
                    type: 'black',
                    wins: 0,
                    losses: 0
                },
                {
                    player_id: id,
                    type: 'white',
                    wins: 0,
                    losses: 0
                }
            ]);
        }).then(() => {
            return getPlayer(username);
        }).then((player) => {
            return successWrapper(player);
        }).catch(failureWrapper);
    });
};

export async function getPlayerData(username) {
    try {
        const player = await getPlayer(username);
        if (!player.length)
            return failureWrapper(new Error('player does not exist'));
        const stats = await getMatchData(player[0].id);
        const playerStats = {
            totalGames: 0
        };
        for (let i = 0; i < stats.length; i++) {
            if (stats[i].type === 'black') {
                playerStats.blackWins = stats[i].wins;
                playerStats.blackLosses = stats[i].losses;
            } else if (stats[i].type === 'white') {
                playerStats.whiteWins = stats[i].wins;
                playerStats.whiteLosses = stats[i].losses;
            }
            playerStats.totalGames += stats[i].wins + stats[i].losses;
        }
        return successWrapper(playerStats);
    } catch (err) {
        return failureWrapper(err);
    }
    
}

export async function matchResult(username, colour, result) { // rabbit, tested
    const player = await getPlayer(username);
    if (!player.length)
            return failureWrapper(new Error('player does not exist'));
    const stats = await getMatchData(player[0].id);
    const setStat = {};
    stats.forEach((stat) => {
        if (stat.type === colour) {
            if (result === 'win') {
                setStat.wins = stat.wins + 1;
            } else if (result === 'loss') {
                setStat.losses = stat.losses + 1;
            }
        }
    });
    return getDb().then((db) => {
        const collection = db.collection('match_history');
        return collection.updateOne({ player_id: player[0].id, type: colour }, { $set: setStat })
            .then(() => {
                return getPlayerData(username);
            });
    }).catch(failureWrapper);
};

export async function getNumberPlayersOnline() { // rabbit, tested
    try {
        const players = await getAllPlayers();
        let total = 0;
        const now = moment();
        players.forEach((player) => {
            if (now.diff(moment(player.last_online), 'minutes') <= 30) {
                total += 1;
            }
        });
           
        return successWrapper(total);
    } catch (err) {
        return failureWrapper(err);
    }
};

export async function updatePlayerAction(username) { //rabbit, tested
    const player = await getPlayer(username);
    if (!player.length)
        return failureWrapper(new Error('player does not exist'));

    return getDb().then((db) => {
        const collection = db.collection('players');
        return collection.updateOne({ username }, { $set: { last_online: new Date() } })
            .then(() => {
                return getPlayer(username);
            });
    }).catch(failureWrapper);
};

export async function doesUserExist(username) {
    try {
        const players = await getPlayer(username);
        return successWrapper(players && players.length >= 1);
    } catch (err) {
        return failureWrapper(err);
    }
};
