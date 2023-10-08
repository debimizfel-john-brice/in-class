function async_fruit() {
    fruit_after_delay()
        .then(fruit => document.write(fruit))
        .catch(err => alert(err.message));
}

function fruit_after_delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fruits = ["apple", "banana", "peach", "onion", "carrot"];
            const index = Math.floor(Math.random() * fruits.length);
            const fruit = fruits[index];
            if (fruit === "onion" || fruit === "carrot") {
                const err = new Error("onion it's not a fruit");
                reject(err);
            }
            resolve(fruit);
        }, 1000);
    });
}9