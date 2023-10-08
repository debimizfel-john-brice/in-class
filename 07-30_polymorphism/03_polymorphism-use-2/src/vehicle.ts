abstract class Vehicle {
    public constructor(public brand: string, public price: number, public wheels: number) { }

    public display() {
        console.log(`Brand : ${this.brand}, Price : $${this.price}, Wheels : $${this.wheels}`);
    }
}