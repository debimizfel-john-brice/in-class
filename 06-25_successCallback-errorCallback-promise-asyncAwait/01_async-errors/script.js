function async_paint() {
    random_color_after_delay(color => document.body.style.backgroundColor = color,
        err => alert(err.message));
}

function random_color_after_delay(success_callback, error_callback) {
    setTimeout(() => {
        const colors = ["yellow", "red", "orange", "blue", "green", "purple"];
        const index = Math.floor(Math.random() * colors.length);
        const color = colors[index];

        if (color === "yellow" || color === "red" || color === "orange") {
            const err = new Error("Hot color");
            error_callback(err);
            return;
        }
        success_callback(color);
    }, 3000);
}

