function async_paint() {
    random_color_after_delay()
        .then(color => document.body.style.backgroundColor = color)
        .catch(err => alert(err.message));
}

function random_color_after_delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const colors = ["yellow", "red", "orange", "blue", "green", "purple"];
            const index = Math.floor(Math.random() * colors.length);
            const color = colors[index];

            if (color === "yellow" || color === "red" || color === "orange") {
                const err = new Error("Hot color");
                reject(err);
            }
            resolve(color);
        }, 3000);
    });
}

