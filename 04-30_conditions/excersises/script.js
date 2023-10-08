

//* 1.Ask a nomber from the user and check if it is odd or even.
// var num = prompt("Enter a number: ");

// if (num % 2 === 0) {
//     document.write("The number is odd <br>");
// }
// else {
//     document.write("The number is even <br>");
// }

//* 2.Ask a nomber from the user and check if the grade is valid
// var num = prompt("Enter a grade: ");
// if (num >= 0 && num <= 100) {
//     document.write("The grade is valid <br>");

// } else {
//     document.write("The grade is not valid <br>");
// }

//* 3.Ask a nomber from the user and check if the grade is under 60 print "failed"
// if the grade is above 60 print "pass" if not print "grade not valid"
// var num = prompt("Enter a grade: ");
// if (num >= 60 && num <= 100) {
//     document.write("Congratulations! you pass<br>");

// } else if (num < 60 && num >= 0) {
//     document.write("I'm sorry, you failed<br>");

// } else {
//     document.write("The grade is not valid <br>");
// }

//* 4.Ask from the user a color between (red, green,blue,yellow, magenta)
// var color = prompt("Enter a color between: \nRed, green,blue,yellow, magenta: ");
// if (color === "red") {
//     document.write("Apple");

// } else if (color === "green") {
//     document.write("Plants");


// } else if (color === "blue") {
//     document.write("Sky");


// } else if (color === "yellow") {
//     document.write("Sun");


// } else if (color === "magenta") {
//     document.write("Flowers");


// } else {
//     document.write("Sorry that color is not in the list");

// }

//~ ---------- SECOND OPTION -------------

// switch (color) {
//     case red:
//         document.write("Apple");
//         break;
//     case green:
//         document.write("Plants");
//         break;
//     case blue:
//         document.write("Sky");
//         break;
//     case yellow:
//         document.write("Sun");
//         break;
//     case magenta:
//         document.write("Flower");
//         break;
//     default:
//         break;
// }

//* 5.Ask from the user number between 1-7 and show the respective day of the week
// var day = +prompt("Enter a number to know which day corespond: ")
// switch (day) {
//     case 1:
//         alert("Sunday");
//         break;
//     case 2:
//         alert("Monday");
//         break;
//     case 3:
//         alert("Tueday");
//         break;
//     case 4:
//         alert("Wendnesday");
//         break;
//     case 5:
//         alert("Thuesday");
//         break;
//     case 6:
//         alert("Friday");
//         break;
//     case 7:
//         alert("Saturday");
//         break;
//     default:
//         break;
// }

//* Ask from the user a grade between 0-100,
//* create a variable named "smiley" and if the grade is grater than 60 show a smiley face else sad face.

var grade = +prompt("Enter a grade between 0-100: ");
var smiley = grade >= 60 ? "😃" : "😕";
alert(smiley);


