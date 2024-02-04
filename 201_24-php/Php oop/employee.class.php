<?php

require_once "./person.class.php";

class Employee extends Person
{
    public $salary;

    public function __construct($first_name, $last_name, $age, $salary)
    {
        parent::__construct($first_name, $last_name, $age);
        $this->salary = $salary;
    }

    public function get_full_info()
    {
        parent::get_full_name();
        echo "Salary: " . $this->salary . "<br>";
    }

    public function greet()
    {
        echo "Hello, I'm an employee <br>";
    }
}
