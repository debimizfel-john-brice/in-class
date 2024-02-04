<?php

//^ Types
// $_GET
// $_POST
// $_REQUEST
// $_FILES
// $_COOKIE
// $_SESSION
// $_SERVER
// $_ENV

$name = $_POST['name'];
$price = $_POST['price'];
$stock = $_POST['stock'];

$line =  "Name: $name, Price: $price, Stock: $stock" . PHP_EOL;
file_put_contents("./products.txt", $line, FILE_APPEND);

header("Location: thanks.php");