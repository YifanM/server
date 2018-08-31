import amqp from 'amqplib';
import * as mongo from './mongo';

const queueName = 'gomoku';
const queueNameToClient = queueName + 'ToClient';
const queueNameToServer = queueName + 'ToServer';

export const send = (type, content) => {
    amqp.connect('amqp://localhost').then((connection) => {
        connection.createChannel().then((channel) => {
            channel.assertQueue(queueNameToClient, { durable: false });
            channel.sendToQueue(queueNameToClient, Buffer.from(JSON.stringify({ type, content })));
        })
    }).catch((err) => {
        console.warn('send ' + err);
    });
}

export const receive = () => {
    amqp.connect('amqp://localhost').then((connection) => {
        connection.createChannel().then((channel) => {
            channel.assertQueue(queueNameToServer, { durable: false });
            channel.consume(queueNameToServer, async (message) => {
                const jsonMessage = JSON.parse(Buffer.from(message.content));
                let player = null;
                switch (jsonMessage.type) {
                    case ("CREATE_USER"):
                        player = await mongo.createUser(jsonMessage.content.username);
                        send("CREATE_USER", player);
                        break;
                    case ("MATCH_RESULT"):
                        const content = jsonMessage.content;
                        const match = await mongo.matchResult(content.username, content.colour, content.result);
                        send("MATCH_RESULT", match);
                        break;
                    case ("ONLINE_PLAYERS"):
                        const numOnline = await mongo.getNumberPlayersOnline();
                        send("ONLINE_PLAYERS", numOnline);
                        break;
                    case ("UPDATE_PLAYER"):
                        player = await mongo.updatePlayerAction(jsonMessage.content.username);
                        send("UPDATE_PLAYER", player);
                        break;
                }
            }, { noAck: true });
        });
    }).catch((err) => {
        console.warn('send ' + err);
    });
}
