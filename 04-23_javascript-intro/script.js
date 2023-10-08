
// Muestra una alerta arriba de la pagina
// alert("Hello \n World");

document.write("Hi <br>");
document.write("Hi <br>");

console.log("comment");


var num1 = 5;
var num2 = 10;

var sum = num1 + num2;
var multiply = num1 * num2;

// Le hablas directamente al archivo html
document.write("num1 = " + num1 + "<br> num2 = " + num2);
document.write("<br> sum = " + sum + "<br> multiply = " + multiply);
document.write("<hr>")

document.write("num1 = ", num1, ", num2 = ", num2);
document.write("<hr>")

document.write(`num1 = ${num1} <br>`);
document.write(`num2 = ${num2} <br>`);
document.write("<hr>")

// -------------------------------------------------------

var firstName = prompt("Enter a name: ");
var lastName = prompt("Enter a lastName: ");

document.write(firstName + " " + lastName+"<br>");

//El + antes del numero lo hace int

var age = +prompt("Enter your age");
document.write("The next year you will be " + (age + 1) + " years old");





