const my_canvas = document.getElementById("my_canvas");
const ctx = my_canvas.getContext("2d");



function random_circles() {

    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
        ctx.beginPath();

        const random_x = Math.floor(Math.random() * (900 - 100 + 1)) + 100;
        var random_y = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

        ctx.arc(random_x, random_y, 50, 0, 2 * Math.PI);
        ctx.fill();

    }
}