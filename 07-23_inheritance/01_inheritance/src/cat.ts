class Cat {

    public name: string;
    public age: number;
    public color: string;
    public fur: number;

    public constructor({ name, age, color, fur }: { name: string, age: number, color: string, fur: number }) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.fur = fur;
    }

    display(): void {
        console.log("hola");
        document.write(`
        Name: ${this.name}<br>
        Age: ${this.age}<br>
        Color: ${this.color}<br>
        Fur: ${this.fur}<br>
        `);
    }

}