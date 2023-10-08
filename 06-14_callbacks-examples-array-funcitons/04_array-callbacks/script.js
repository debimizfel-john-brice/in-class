
function array_callbacks() {
    const numbers = [10, 25, 33, 574, 7, 19, 23, 92, 38, 18];
    // const evens = [];

    // for (const number of numbers) {
    //     if (number % 2 === 0) {
    //         evens.push(number);
    //     }
    // }

    const evens = numbers.filter(n => n % 2 === 0);

    alert(evens);
}


