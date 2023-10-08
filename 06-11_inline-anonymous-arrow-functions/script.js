//* -------------------- Func into a variable

function test_1() {
    const f_get_avg = get_avg;
    const avg = f_get_avg(2, 4, 6);
    alert("Avg: " + avg);
}

function get_avg(n1, n2, n3) {
    const avg = (n1 + n2 + n3) / 3;
    return avg;
}

//* -------------------- Func like an argument

function test_2() {
    display_result(get_sum);
    display_result(get_avg);
}

function display_result(func) {
    const arr = [1, 2, 3, 4, 5];
    const result = func(arr);
    alert(result);
}

function get_sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function get_avg(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    const avg = sum / arr.length;
    return avg;
}

//* -------------------- In line func

function test_3() {
    display_result(function get_sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    });

    display_result(function get_avg(arr) {
        let sum = 0;
        for (const item of arr) {
            sum += item;
        }
        const avg = sum / arr.length;
        return avg;
    });
}

//* -------------------- Anonymous func
// ^ --------------- 1

function test_4() {
    do_work_4(function () {
        alert("Deborah");
    });
}

function do_work_4(func) {
    func();
    func();
    func();
}

// ^ --------------- 2

function test_5() {
    do_work_5(function (num) {
        alert(num ** num);
    });
}

function do_work_5(func) {
    func(2);
    func(3);
    func(4);
}

// ^ -------------- 3

function test_6() {
    do_work_6(function (n1, n2, n3) {
        alert(n1 + n2 + n3);
    });
}

function do_work_6(func) {
    func(2, 3, 4);
    func(3, 5, 7);
    func(4, 6, 8);
}

// ^ -------------- 4

function test_7() {
    do_work_7(function (n1, n2, n3) {
        const avg = (n1 + n2 + n3) / 3;
        alert(avg);
    });

    do_work_7(function (n1, n2, n3) {
        const mult = (n1 * n2) * n3;
        alert(mult);
    });
}

function do_work_7(func) {
    func(2, 3, 4);
}

// ^ -------------- 4

function test_8() {
    do_work_8(function (n1, n2, n3) {
        const sum = (n1 + n2 + n3);
        return sum
    });

    do_work_8(function (n1, n2, n3) {
        const mult = (n1 * n2) * n3;
        return mult;
    });
}

function do_work_8(func) {
   const result = func (1,2,3);
   alert("Result "+ result);
}

//* -------------------- Arrow func

function test_9() {
    do_work_9((str, count) => {
       for(let i = 0 ; i < count ; i ++){
        console.log(str);
       }
    });

    do_work_9((str, count) => {
        for(let i = 0 ; i < count ; i ++){
         alert(str);
        }
     });
}

function do_work_9(func) {
   func("cool", 7);
}

