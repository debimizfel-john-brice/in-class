/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>

class Product {
    public name: string;
    public price: number;
    public description: string;
    public barcode: number;

    public constructor({ name, price, description }) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.barcode = Math.floor(Math.random() * 100000) + 1000;
    }

    display() {
        // $("#product_card").
        document.write(`
        Product name: ${this.name}<br>
        Price: $${this.price}.00 <br>
        Description:<br>${this.description}<br><br>
        Barcode: ${this.barcode}<hr>
        `);
    }
}