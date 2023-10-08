function display() {
    const index = +prompt("Ente a number: ");
    const value = fibonacci(index);
    document.write(`value of index ${index} in fibonacci sequence: ${value}`);
}

function fibonacci(index) {
    if (index <= 2) return index;
    return fibonacci(index - 1) + fibonacci(index - 2);
}