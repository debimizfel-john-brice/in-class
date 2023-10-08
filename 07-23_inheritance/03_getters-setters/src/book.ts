class Book {
    public name: string;
    public autor: string;
    public pages: number;
    private _price: number;

    public constructor({ name, autor, pages, price }:
        { name: string, autor: string, pages: number, price: number }) {
        this.name = name;
        this.autor = autor;
        this.pages = pages;
        this._price = price;
    }

    public display(): void {
        document.write(`
        Name: ${this.name}<br>
        Autor: ${this.autor}<br>
        Pages: ${this.pages}<br>
        Price: ${this._price}<hr>
        `);
    }

    public get price(): number {
        return this._price;
    }

    public set price(final_price: number) {
        if (final_price < 0 || final_price > 100) {
            throw new Error("The price is not correct");
        }
        this._price = final_price;
    }
}