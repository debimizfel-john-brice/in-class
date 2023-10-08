const cat1 = new Cat({
    name: 'Fluffy 1',
    age: 3,
    color: "Black",
    fur: 5
});

cat1.display();
document.write("<hr>");

const cat2 = new WildCat({
    name: 'Fluffy 2',
    age: 2,
    color: "White",
    fur: 6,
    weight: 5,
});

cat2.display();