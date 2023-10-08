//^ Functions

function print(v = "", end = "<br>") {
    // console.log(v);
    document.write(v + end);
}

function say_hi() {
    console.log("Hi");
}

// say_hi();

function question_1() {
    for (var i = 1; i <= 100; ++i) {
        print(i, ", ");
    }
    print();

}

// for (var i = 1; i <= 3; ++i) {
//     e_1();
// }

function question_2(n1, n2, n3) {
    var sum = (n1 + n2 + n3);
    var avg = (sum / 3);
    print("sum: " + sum);
    print("avg: " + avg);

}

// question_2(1, 2, 3);

// question_2(+prompt("Enter a number: "), +prompt("Enter a second number: "), +prompt("Enter a third number: "));

function display_header(str) {
    print(str);
}

function print_line() {
    print("<hr>", "");
}

function display_main_header(str) {
    display_header(str);
    print_line();
}

// display_main_header("Hello world");


function stars(n) {
    for (var i = 0; i < n; ++i) {
        print("* ", "");
    }
}

function height(n) {
    for (var i = 0; i < n; ++i) {
        stars(n);

        print("");
    }
}

// height(+prompt("Enter a number: "));

function square(height, width) {
    for (var i = 0; i < height; ++i) {
        stars(width);

        print("");
    }
}
// square(10, 5);

function row(n) {
    for (var i = 1; i <= n; ++i) {
        print(i + " ", "");
    }
}

function triangle_upsidedown(n) {
    for (var i = 0; i < n; ++i) {
        row(n - i)
        print("");
    }
}

triangle_upsidedown(4);
