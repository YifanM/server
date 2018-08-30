import bluebird from 'bluebird';
import redis from 'redis';
import { receive } from './amqp';
import express from 'express';
import * as mongo from './mongo';

// const app = express();

// app.get('/api/user', (req, res) => res.send(false));
// app.get('/api/games', (req, res) => res.send({}));

// app.listen(3003, () => console.log('listening on 3003'));

mongo.matchResult('a', 'black', 'win').then(console.log);
