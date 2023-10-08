
//^ O(1)
function test() {
    alert("hi"); // O(1)

    const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    document.write("index 3 in th array is " + num[3]); // O(1)

}

//* ----------------------------------

//^ O(n)
function test2() {

    const numbers = []
    for (let i = 0; i < 1000; ++i) {
        const num = Math.floor(Math.random() * 100) + 1;
        numbers.push(num);
    }

    const num_to_search = +prompt("enter a number: ");
    const index = search(numbers, num_to_search);
    if (index === -1) {
        alert("culdn't find the number");
        return;
    }

    console.log(`the ${num_to_search}'s index is :${index}`);
}

function search(arr, num_to_search) {

    for (let i = 0; i < arr.lenght; ++i) {
        if (arr[i] === num_to_search) {
            return i;
        }
    }

    return -1;
}

//* --------------------------

function test3() {
    const numbers = []
    for (let i = 0; i < 1000; ++i) {
        const num = Math.floor(Math.random() * 100) + 1;
        numbers.push(num);
    }

    numbers.sort((a, b) => a - b);
    document.write(numbers);

    const num_to_search = +prompt("enter a number: ");
    const index = binary_search(numbers, num_to_search);
    if (index === -1) {
        alert("culdn't find the number");
        return;
    }


}

function binary_search(arr, num_to_search) {

    let start = 0, end = arr.lenght - 1;
    do {

        //* Calc middles
        let middle = (end - start) / 2;

        //* Calc middles
        if (arr[middle] === num_to_search) {
            return middle;
        }

        //* Calc middles
        if (num_to_search < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        //* Calc middles
        if (start > end) {
            return -1;
        }

    } while (true);
}

