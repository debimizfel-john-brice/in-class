
function random_color() {
    setInterval(() => {
        const color = get_random_color();
        document.body.style.backgroundColor = color;
    }, 500);

}

function get_random_color() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);

}
