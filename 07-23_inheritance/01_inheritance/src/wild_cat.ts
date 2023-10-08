class WildCat extends Cat {

    public weight: number;

    public constructor({ name, age, color, fur, weight }:
        { name: string, age: number, color: string, fur: number, weight: number }) {
        super({ name, age, color, fur });
        this.weight = weight;
    }

    display(): void {
        super.display();
        document.write(`Weight: ${this.weight}`);
    }

}