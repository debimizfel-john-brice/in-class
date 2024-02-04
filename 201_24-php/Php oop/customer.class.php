<?php

require_once "./person.class.php";

class Customer extends Person
{
    public $address;
    public $credit_card;

    public function __construct($first_name, $last_name, $age, $address, $credit_card)
    {
        parent::__construct($first_name, $last_name, $age);
        $this->address = $address;
        $this->credit_card = $credit_card;
    }

    public function get_full_info()
    {
        parent::get_full_name();
        echo "Address: " . $this->address . "<br>";
        echo "Credit Card: " . $this->credit_card . "<br>";
    }

    public function greet()
    {
        echo "Hello, I'm a customer <br>";
    }
}
