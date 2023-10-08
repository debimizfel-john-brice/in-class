//^ Random


//^ 1. Create number 0 -1
// var num = Math.random();
// document.write(num);

// document.write("<hr>");

// //^ 2. Spread it
// var a = num * 100; // 0 - 99
// document.write(a);

// document.write("<hr>");

// //^ 3. make it an integer
// var n = Math.floor(a);
// document.write(n);
// document.write("<hr>");


// var n = Math.cail(a);
// var n = Math.raound(a);

// //^ shift it
// var s = n + 500;
// document.write(s);
// document.write("<hr>");



//& -----------------------------

//* formula: (max - min + 1) + min

// var num1 = Math.floor(Math.random() * 20) + 50; //^ 50 - 70 no including 70
// document.write(num1);

// document.write("<hr>");

// var num2 = Math.floor(Math.random() * 130) + 30; //^ 130 - 160 no including 160
// document.write(num2);

// document.write("<hr>");

// var num3 = Math.floor(Math.random() * 21) + 10; //^ 20 - 30 including 30
// document.write(num3);

// document.write("<hr>");

// var num3 = Math.floor(Math.random() * 4001) + 1000; //^ 20 - 30 including 30
// document.write(num3);

//& -----------------------------

var arr = [];

for (var i = 0; i < 10; ++i) {

    var random = Math.floor(Math.random() * 501) + 100;
    arr.push(random);
}

for (var i = 0; i < arr.length; ++i) {
    document.write(arr[i] + "<br>");
}

document.write("<hr>");

var sum = 0;
for (var item of arr) {
    sum += item;
}

document.write(sum);
document.write("<hr>");
document.write(sum / arr.length);

