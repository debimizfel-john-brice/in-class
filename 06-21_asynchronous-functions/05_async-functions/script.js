
function test_1() {
    calc_after_delay(sum => alert(sum));
}

function calc_after_delay(callback) {
    let sum = 0;
    for (let i = 1; i <= 100; ++i) {
        sum += i;
    }

    setTimeout(() => callback(sum), 3000);
}

//^ -----------------------------

function test_2() {
    random_after_delay(random_num => alert(random_num));
}

function random_after_delay(callback) {
    setTimeout(() => callback(Math.floor(Math.random() * 100) + 1), 3000);
}

//^ -----------------------------

(function () {

    const random_color = document.getElementById("random_color");
    random_color.addEventListener("click", () => random_color_after_delay(random_color => document.body.style.backgroundColor = random_color));

    function random_color_after_delay(callback) {
        setTimeout(() => {
            callback('#' + Math.floor(Math.random() * 16777215).toString(16));
        }, 3000);
    }

})();


