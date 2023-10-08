class Motorcycle extends Vehicle {
    public constructor(public brand: string, public price: number, public wheels: number, public helmet_color: string) {
        super(brand, price, wheels);
    }
}