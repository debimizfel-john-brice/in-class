class Android extends Smartphone implements Case {
    public static store: string = "Google Play";
    public color: string;
    public price: number;

    public constructor(public name: string, public screen: number, public mAh: number, public free_memory_space: number, color: string, price: number) {
        super(name, screen, mAh);
        this.color = color;
        this.price = price;
    }


}