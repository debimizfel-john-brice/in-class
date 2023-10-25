// Custom Modules:
const calc = require("./calc");
const avg = calc.avg(20, 30, 40);
console.log("Avg: " + avg);

const max = calc.max(39, 234);
console.log("Max: " + max);


// NPM Modules:
require("colors");
console.log("this is red".red);

// Build in modules
require("os")
console.log();