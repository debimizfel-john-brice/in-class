function test(n) {

    if (n <= 0) return;
    console.log(n);
    test(n - 1);
}

test(10);

function sum(n) {
    if (n === 0) return 0;

    return n + sum(n - 1);

}

console.log(sum(5));