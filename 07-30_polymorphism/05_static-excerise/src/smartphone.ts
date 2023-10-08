abstract class Smartphone {
    public constructor(public name: string, public screen: number, public mAh: number) { }

    public display(): void {
        console.log(`
        Name: ${this.name}
        Screen: ${this.screen}
        mAh: ${this.mAh}
        `);
    }

    public static airpods(brand: any): boolean {
        if (brand instanceof Iphone) return true;
        return false;
    }
}