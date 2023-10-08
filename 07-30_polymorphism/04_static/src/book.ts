class Book {
    public static book_mark: boolean = true;
    public constructor(public title: string, public price: number, public pages: number, public author: string) { }

    public display(): void {
        console.log(`
        Title: ${this.title}
        Author: ${this.author}
        Pages: ${this.pages}
        Price: $${this.price}
        Book mark: ${Book.book_mark}
        `);
    }

    public static description(): void {
        console.log(`Officia velit sint Lorem veniam veniam Lorem.`);
    }
}