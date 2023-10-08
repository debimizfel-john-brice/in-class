class Cat {
    public name: string;
    public age: number;
    public color: string;
    private chip_id: number;

    public constructor({ name, age, color }) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.chip_id = Math.floor(Math.random() * 10000) + 1000;
    }

    display(): void {
        document.write(`
        Name: ${this.name}<br>
        Age: ${this.age}<br>
        Color: ${this.color}<br>
        Chip ID: ${this.chip_id}
        <hr>
        `);
    };

    happy_birthday(): void {
        this.age++;
    }
}