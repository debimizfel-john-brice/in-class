// Data types

var a = "Hello"; //string
console.log(a, typeof a);

var b = 5; //number

var c = true; //boolean

var d = Date(); // object

var e = alert; //function

var f; //undefined

//-----------------------------

var d2 = null; //object

var g = "Hello" * 10; //NaN, number (not a number)
console.log(g, typeof g);

var g2 = Nan; //NaN number (not a number)

var g3 = Infinity; //Infinity, number

//------------------------------

var x = null;
var y;

console.log("x==y", x == y); //it's true because the value is equal
// BUT
console.log("x===y", x === y); //it's false because he's looking deeper about the types so it's flase


var x = "";
var y = false;

console.log("x==y", x == y); //it's true because the value is equal
// BUT
console.log("x===y", x === y); //it's false because he's looking deeper about the types so it's flase