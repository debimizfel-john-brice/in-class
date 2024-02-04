<?php

// print
echo "Print: <br>";
echo "Hello World! <br>";
echo "<br><br>";


// variable
$first_name = "John";
$last_name = "Doe";
$age = 35;

// concatenation
echo "Concatenation: <br>";
echo "My name is $first_name $last_name and I am $age years old. <br>";
echo "<br><br>";


// conditional
echo "Conditional: <br>";
$n = 32;
if ($n < 0) {
    echo "$n is a negative number. <br>";
} else if ($n  === 0) {
    echo "$n is zero. <br>";
} else {
    echo "$n is a positive number. <br>";
}
echo "<br><br>";


// loop
echo "Loop: <br>";
$count = 1;
while ($count <= 10) {
    echo "$count ";
    $count++;
}
echo "<br>";

for ($i = 1; $i <= 10; $i++) {
    echo "$i ";
}
echo "<br><br>";


// array
echo "Array: <br>";
$arr = [10, 20, 30];
for ($i = 0; $i < count($arr); $i++) {
    echo "$arr[$i] ";
}
echo "<br>";

foreach ($arr as $value) {
    echo "$value ";
}
echo "<br><br>";


// associative array
echo "Associative array: <br>";
$student = [
    "fisrt_name" => "John",
    "last_name" => "Doe",
    "age" => 35
];

echo $student["fisrt_name"];
foreach ($student as $key => $value) {
    echo "$key: $value <br>";
}
echo "<br><br>";

// literal object
echo "Literal object: <br>";
$cat = new stdClass();
$cat->name = "Tom";
$cat->age = 3;

echo "Name: $cat->name, Age: $cat->age <br>";
echo "<br><br>";


// function
echo "Function: <br>";
function display_message($msg, $count = 1)
{
    for ($i = 0; $i < $count; $i++) {
        echo "$msg | ";
    }
}
display_message("Hello World!", 3);
echo "<br><br>";

// include
echo "Include: <br>";

// include "./calc.php";
// include_once "./calc.php";
// require "./calc.php";

require_once "./calc.php";
$avg = get_avf(10, 20, 30);
echo "Average: $avg <br>";

echo "The max of 10 and 20 is " . get_max(10, 20);
echo "<br><br>";
