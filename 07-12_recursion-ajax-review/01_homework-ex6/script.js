function display() {
    print_1_to_n(10);
}

function print_1_to_n(num) {

    if (num <= 0) return;
    print_1_to_n(num - 1);
    document.write(num + " ");

}