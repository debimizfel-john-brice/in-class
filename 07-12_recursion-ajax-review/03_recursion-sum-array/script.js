function display() {
    const arr = [12, 23, 34, 45, 56, 67, 78, 89, 91];
    const total = sum(arr, 0, 8)
    document.write(total);
}


function max(arr, start, end) {
    if (start === end) return arr[start];
    return arr[start] + max(arr, start + 1, end);

}