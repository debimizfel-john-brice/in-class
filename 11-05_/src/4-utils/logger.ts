import fsPromises from "fs/promises";

async function logger(msg: string): Promise<void> {
    const now = new Date();
    let message = now.toLocaleDateString() + "\n";
    message += msg + "\n";
    message += "-------------------------\n";
    await fsPromises.appendFile("./src/1-assets/logs/logs.txt", message);
}

export default logger;