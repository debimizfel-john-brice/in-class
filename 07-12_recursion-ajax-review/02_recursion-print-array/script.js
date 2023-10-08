function display() {
    const arr = [12, 23, 34, 45, 56, 67, 78, 89, 91];

    print_arr(arr, 2, 6);

}


function print_arr(arr, start_index, end_index) {
    if (start_index > end_index) return;

    document.write(arr[start_index] + " ");
    print_arr(arr, start_index + 1, end_index);
}