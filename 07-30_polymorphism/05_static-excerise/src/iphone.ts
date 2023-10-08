class Iphone extends Smartphone implements Case {
    public static store: string = "AppStore";
    public color: string;
    public price: number;
    public constructor(public name: string, public screen: number, public mAh: number, public camera_quality: number, color: string, price: number) {
        super(name, screen, mAh);
        this.color = color;
        this.price = price;
    }

}