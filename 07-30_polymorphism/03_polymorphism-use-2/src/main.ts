const vehicleArr: Vehicle[] = [];

const car = new Car("Toyota", 207_000, 4, 5);
const moto = new Motorcycle("Toyota", 207_000, 4, "black");

vehicleArr.push(car);
vehicleArr.push(moto);

for (const v of vehicleArr) {
    v.display();
    if (v instanceof Car) {
        console.log(`Doors: ${v.doors}`);;
    }
    if (v instanceof Motorcycle) {
        console.log(`Helmet Color: ${v.helmet_color}`);;
    }
}