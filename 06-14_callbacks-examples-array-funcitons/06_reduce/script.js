
function array_callbacks() {

    const numbers = [];

    for (let i = 0; i < 10; ++i) {
        const number = Math.floor(Math.random() * 10) + 1;
        numbers.push(number);
    }

    document.write(numbers + "<hr>");

    let result = numbers.reduce((sum, value) => sum += value, 0);
    document.write(result + "<hr>");

    result = numbers.reduce((max, value) => value > max ? max = value : max = max, 0);
    document.write(result + "<hr>");

}

array_callbacks()