import amqp from 'amqplib';

const queueName = 'gomoku';
const queueNameToClient = queueName + 'ToClient';
const queueNameToServer = queueName + 'ToServer';

export const send = (message) => {
    amqp.connect('amqp://localhost').then((connection) => {
        connection.createChannel().then((channel) => {
            channel.assertQueue(queueNameToClient, { durable: false });
            channel.sendToQueue(queueNameToClient, Buffer.from(message));
        })
    }).catch((err) => {
        console.warn('send ' + err);
    });
}

export const receive = () => {
    amqp.connect('amqp://localhost').then((connection) => {
        connection.createChannel().then((channel) => {
            channel.assertQueue(queueNameToServer, { durable: false });
            channel.consume(queueNameToServer, (message) => {
                console.log(message);
                send('pong');
            }, { noAck: false });
        });
    }).catch((err) => {
        console.warn('send ' + err);
    });
}
