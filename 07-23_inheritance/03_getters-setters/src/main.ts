const book1 = new Book({
    name: "Harry Potter",
    autor: "J.K rowling",
    pages: 234,
    price: 560,
});

book1.display();

book1.price = 135; //*Error
book1.price = 35;

book1.display();