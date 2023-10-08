function display() {
    const numbers = [12, 23, 34, 45, 56, 67, 78, 89, 91];
    document.write(numbers + "<hr>");

    const num_to_search=+prompt("Enter a number:");

    const index = binary_search(numbers, 2,6,num_to_search);;

    if(index === -1){
        alert("can't find the number");
        return;
    }


    document.write(`the index of number: ${num_to_search} is: ${index}`);
}


function binary_search(arr, start, end, num_to_search) {
    if (start > end) return -1;
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === num_to_search) return middle;
    return num_to_search < arr[middle] ? binary_search(arr, start, middle - 1, num_to_search) : binary_search(arr, middle + 1, end, num_to_search);
}