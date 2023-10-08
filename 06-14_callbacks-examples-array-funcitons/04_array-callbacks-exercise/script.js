
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


function random_arr() {
    const arr = [];

    //* fill the array with 100 random numbers
    for (let i = 0; i < 100; ++i) {
        const number = Math.floor(Math.random() * 100) + 1;
        arr.push(number);
    }
    document.write(arr + "<hr>");

    //* fill new array with numbers over 80
    let new_arr = arr.filter(n => n > 80);
    document.write(new_arr + "<hr>");

    //* fill again the new array with odd numbers under 50
    new_arr = arr.filter(n => n % 2 !== 0 && n < 50);
    document.write(new_arr + "<hr>");

    //* show the first number over 50
    let new_num = arr.find(n => n % 2 === 0 && n > 50);
    document.write(new_num + "<hr>");

    //* show the index of the first number even over 80
    new_num = arr.findIndex(n => n % 2 === 0 && n > 80);
    document.write(new_num + "<hr>");

    //* show an array easyly
    arr.forEach(num => document.write(num + " |"));
    document.write("<hr>");

    new_arr.forEach(num => document.write(num + "<br>"));
    document.write("<hr>");

    //* changes array values
    new_arr = arr.map(n => n * 2);
    document.write(new_arr + "<hr>");

    new_arr = arr.map(n => n ** 2);
    document.write(new_arr + "<hr>");

    new_arr = arr.map(n => n % 2 === 0 ? 'even' : 'odd');
    document.write(new_arr + "<hr>");

    //* concatenate functions
    arr.filter(n => n % 2 === 0).map(n => n * 2).forEach(n => document.write(n + " - "));
    document.write("<hr>");

    arr.filter(n => n < 10).map(n => n ** 3).forEach(n => document.write(n + "<br>"));
}


random_arr();