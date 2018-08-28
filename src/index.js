import bluebird from 'bluebird';
import redis from 'redis';
import { receive } from './gomoku/server';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

receive();
