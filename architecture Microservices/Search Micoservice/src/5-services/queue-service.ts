import { connect } from "amqplib";

async function sendToQueue(queueName: string = "wishlist-queue", message: string): Promise<void> {
    const connection = await connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Message sent to queue ${queueName}`);
    await channel.close();
    await connection.close();
}

export default {
    sendToQueue
}
