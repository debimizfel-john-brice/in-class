class Car extends Vehicle {
    public constructor(public brand: string, public price: number, public wheels: number, public doors: number) {
        super(brand, price, wheels);
    }

}