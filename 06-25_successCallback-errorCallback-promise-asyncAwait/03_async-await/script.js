async function async_fruit() {
    try {
        const fruit = await fruit_after_delay();
        document.write(fruit);
    } catch (err) {
        alert(err.message);
    }
}

function fruit_after_delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fruits = ["apple", "banana", "peach", "onion", "carrot"];
            const index = Math.floor(Math.random() * fruits.length);
            const fruit = fruits[index];
            if (fruit === "onion" || fruit === "carrot") {
                const err = new Error("this is not a fruit");
                reject(err);
            }
            resolve(fruit);
        }, 1000);
    });
}