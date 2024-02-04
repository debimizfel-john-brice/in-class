<?php

require_once "./person.class.php";
require_once "./employee.class.php";
require_once "./customer.class.php";

// $p = new Person("John", "Doe", 35);
// $p->set_age(40);
// echo $p->get_full_name();
echo "----------------------------------<br>";

$e = new Employee("John", "Doe", 35, 1000);
$e->get_full_info();
$e->greet();
echo "----------------------------------<br>";

$people = [];
$people[] = new Employee("David", "Doe", 35, 1000);
$people[] = new Employee("Jhon", "Doe", 35, 1000);
$people[] = new Customer("Lisa", "Doe", 35, "123 Main St", "1234-5678-9012-3456");
$people[] = new Customer("Mary", "Doe", 35, "123 Main St", "1234-5678-9012-3456");

foreach ($people as $person) {
    $person->get_full_info();
    $person->greet();
    echo "<hr>";
}
echo "----------------------------------<br>";


$c = new Customer("Lisa", "Doe", 35, "123 Main St", "1234-5678-9012-3456");
$c->get_full_info();
$c->greet();
echo "----------------------------------<br>";
