import mongodb from 'mongodb';

const url = 'mongodb://localhost:27017';

const dbName = 'gomoku';

export const connect = () => {
    mongodb.connect(url).then((client) => {
        const db = client.db(dbName);

        const collection = db.collection('documents');

        collection.insertMany([ { a: 1}, { a: 2}, { a: 3}]).then((result) => {
            console.log(result);
        }).then(() => {
            client.close();
        });

    }).catch(console.warn);
};
