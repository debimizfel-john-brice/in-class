import { Message, connect } from "amqplib";
import wishlistService from "./wishlist-service";

async function readFromQueue(): Promise<void> {
    const connection = await connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue("wishlist-queue");
    channel.consume("wishlist-queue", async (msg: Message) => {
        const name = msg.content.toString();
        await wishlistService.saveWishlist(name);
        channel.ack(msg);
    });
}

export default {
    readFromQueue
}
