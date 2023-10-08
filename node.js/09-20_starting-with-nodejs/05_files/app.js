const fs = require("fs");// file system
const fsPromises = require("fs/promises");

async function main() {
    if (!fs.existsSync("./data")) {
        await fsPromises.mkdir("./data");
    }
    await fsPromises.writeFile("./data/details.txt", "Hello World 1\nHello World 2");

    await fsPromises.appendFile("./data/details.txt", "\nHello World 3\nHello World 4");

    const content = await fsPromises.readFile("./data/details.txt", "utf-8");
    console.log(content);
}

main();