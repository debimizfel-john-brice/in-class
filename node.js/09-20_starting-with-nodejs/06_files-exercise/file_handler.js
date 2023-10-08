const fs = require("fs");
const fsPromises = require("fs/promises");
if (!fs.existsSync("./data")) {
    fs.mkdirSync('./data');
}

async function saveArray(numbers = []) {

    await fsPromises.writeFile("./data/details.txt", "");
    // await fsPromises.writeFile("./data/details.txt", numbers.join("\n"));

    for (let i = 0; i < numbers.length; ++i) {
        await fsPromises.appendFile("./data/details.txt", numbers[i] + "\n");
    }
}

async function readArray() {
    const content = await fsPromises.readFile("./data/details.txt", "utf-8");
    return content.split("\n").filter(n => n !== "").map(n => +n);
}

module.exports = {
    saveArray,
    readArray
}
