const file_handler = require("./file_handler");

async function main() {
    const arr = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1];
    await file_handler.saveArray(arr);

    const newArr = await file_handler.readArray();
    console.log(newArr);
}

main();
