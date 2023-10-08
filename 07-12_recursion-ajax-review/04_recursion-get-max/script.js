function display() {
    const arr = [12, 23, 34, 45, 56, 67, 78, 89, 91];
    const max = get_max(arr, 2, 6)
    document.write(max);
}

function get_max(arr, start, end) {
    if (start === end) return arr[start];
    const max = get_max(arr, start + 1, end);
    return arr[start] > max ? arr[start] : max;
}

function get_max2(arr, start, end) {
    if (start === end) return arr[start];
    const max = get_max2(arr, start, end - 1);
    return arr[end] > max ? arr[end] : max;
}

function get_max3(arr, start, end) {
    if (start === end) return arr[start];
    return arr[start] > arr[end] ? get_max3(arr, start, end - 1) : get_max3(arr, start + 1, end);
}