import bluebird from 'bluebird';
import redis from 'redis';
import { send, receive } from './amqp';
import express from 'express';
import * as mongo from './mongo';

const app = express();

app.get('/api/user', async (req, res) => {
    const username = req.query.username;
    if (!username) {
        res.send({
            success: false,
            error: 'username was not provided'
        });
    }
    const userExistsResponse = await mongo.doesUserExist(username);
    res.send(userExistsResponse);
});

app.get('/api/games', async (req, res) => {
    const username = req.query.username;
    if (!username) {
        res.send({
            success: false,
            error: 'username was not provided'
        });
    }
    const matchInfoResponse = await mongo.getPlayerData(username);
    res.send(matchInfoResponse);
});

app.listen(3003, () => console.log('listening on 3003'));

receive();
console.log('rabbit is listening');
