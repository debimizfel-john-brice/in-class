const num = Math.random();

if (num > 0.5) {
    const car = new Car("Toyota", 207_000, 4, 5);
    car.display();
} else {
    const moto = new Motorcycle("Honda", 40_000, 2, "black");
    moto.display();
}


//* ------------------

let vehicle: Vehicle;
if (num > 0.5) {
    vehicle = new Car("Toyota", 207_000, 4, 5);
} else {
    vehicle = new Motorcycle("Honda", 40_000, 2, "black");
}
vehicle.display();



