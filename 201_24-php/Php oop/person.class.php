<?php

abstract class Person
{
    // properties
    public $first_name;
    public $last_name;
    public $age;

    // constructor
    public function __construct($first_name, $last_name, $age)
    {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->age = $age;
    }

    // methods
    public function get_full_name()
    {
       echo "Full name: $this->first_name $this->last_name <br>";
    }

    // abstract method
    public abstract function greet();
}
