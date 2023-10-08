function print(v = "", end = "<br>") {
    //console.log(v);
    document.write(v + end);
    // alert(v);
}

function star() {
    print("* ", "");
}

// //?
function question_15(height, width) {

    for (var i = 0; i < height; ++i) {
        if ((i == 1 || i == height - 2)) {
            print("* ", "");
        }
        for (j = 0; j < width; ++j) {


            if ((i == 1 || i == height - 2)) {
                print("&nbsp", "");
                print("&nbsp", "");
            } else if (j <= width) {
                star();
            }
        }

        if ((i == 1 || i == height - 2)) {
            print("* ", "");
        }

        print();
    }
}

question_15(4, 6);

// //~-----------------------------------

// function number() {
//     return 10;
// }

// var num = number;
// // print(num());

// function exercise_1(n1, n2) {
//     return (n1 > n2) ? n1 : n2;
// }

// function exercise_2(salary) {
//     return (salary + (salary * 0.15));
// }


// function exercise_3(color) {
//     if (color == "red") {
//         return "🍎";
//     } else if (color == "blue") {
//         return "🫐";
//     } else if (color == "yellow") {
//         return "☀️";
//     } else if (color == "green") {
//         return "🌲";
//     } return "Color not valid";


// }


// function exercise_4(min, max) {

//     var random = Math.floor(Math.random() * max) + min;
//     return random;
// }


// function exercise_5() {

// }

// function main() {
//     var max = exercise_1(6, 19);
//     // print(max);
//     // var bonus = exercise_2(+prompt());
//     // print(bonus);
//     var color = exercise_3("blue");
//     // print(color);
//     var random = exercise_4(100, 200);
//     // print(ra ndom);
//     // var random = exercise_4(+prompt(), +prompt());
//     // print(random);
// }

// main();


// //&--------------------------

// function sayHi() {
//     print("Hi");
// }

// function age() {
//     var age = prompt("What is your age?");
//     // print(age);
// }

// function message(msg) {
//     // print(msg);
// }

// function console() {
//     print("hello world!");
// }

// function numbers() {
//     for (var i = 1; i <= 100; ++i) {
//         print(i);
//     }
// }

// function random() {
//     var random = Math.floor(Math.random() * 1001) + 1;
//     print(random);
// }
