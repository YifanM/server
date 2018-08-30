import bluebird from 'bluebird';
import redis from 'redis';
import { receive } from './amqp';
import { connect } from './mongo';

// redis mongo

// bluebird.promisifyAll(redis.RedisClient.prototype);
// bluebird.promisifyAll(redis.Multi.prototype);

// receive();

connect();
