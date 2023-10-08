//^ Arrays

// var grades = [100, 98, 97, 96, 80, 100, 95];

// //^ Array length
// console.log(grades.length);


// console.log(grades[0]);
// grades[0] = 99;
// console.log(grades[0]);


// console.log(grades[3]);
// grades[3] = 100;
// console.log(grades[3]);


// grades.push(50);
// console.log(grades);

// console.log("------------------------------------");


// // --------------------------------------


// var fruits = ["apple", "pair", "orange", "banana", "grapes"];

// document.write(fruits + "<hr>");

// fruits[1] = "avocado";
// document.write(fruits + "<hr>");

// document.write(fruits.length + "<hr>");

// fruits.push("pair");
// document.write(fruits + "<hr>");
// document.write(fruits.length + "<hr>");

// // --------------------------------------

// for (var i = 0; i < fruits.length; ++i) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<hr>");

// // --------------------------------------

// //^ for-of
// for (var item of fruits) {
//     document.write(item + "<br>");
// }
// document.write("<hr>");


// --------------------------------------

var salary = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

for (var i = 0; i < salary.length; ++i) {
    document.write(salary[i] + "<br>");
}
document.write("<hr>");

var sum = 0;
for (var item of salary) {
    sum += item;
}
document.write(sum + "<hr>");
document.write(sum / salary.length + "<hr>");
