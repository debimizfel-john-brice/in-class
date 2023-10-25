import express, { Request, Response } from "express";

// Create server object
const server = express();

// Set express to add to the body a request object
server.use(express.json());

server.get("/", (request: Request, response: Response) => {
    console.log("Client request root " + request.method + ", Route: " + request.originalUrl);

    response.send(`
    <html>
        <body>
            <h1>Books REST API</h1>
        </body>
    </html>
    `);
});

const books = [
    { id: 1, name: "HTML", price: 50 },
    { id: 2, name: "CSS", price: 20 },
    { id: 3, name: "Js", price: 90 },
    { id: 4, name: "Java", price: 60 }
];

// GET all books "http://localhost:4000/api/books"
server.get("/api/books", (request: Request, response: Response) => {
    console.log("Client request root " + request.method + ", Route: " + request.originalUrl);

    response.json(books);

});

// GET one book "http://localhost:4000/api/books/:id"
server.get("/api/books/:id", (request: Request, response: Response) => {
    console.log("Client request root " + request.method + ", Route: " + request.originalUrl);

    const id = +request.params.id;
    const book = books.find(b => b.id === id);
    response.json(book);

});

// POST "http://localhost:4000/api/books"
server.post("/api/books", (request: Request, response: Response) => {
    console.log("Client adding new book. Method: " + request.method + ", Route: " + request.originalUrl);

    const new_book = request.body;
    new_book.id = books[books.length - 1].id + 1;

    books.push(new_book);
    response.json(new_book);
});

// PUT "http://localhost:4000/api/books/:id"
server.put("/api/books/:id", (request: Request, response: Response) => {
    console.log("Client updating book. Method: " + request.method + ", Route: " + request.originalUrl);

    const id = +request.params.id;

    const book = request.body;
    book.id = id; // ponemos el id de la ruta por si alguien manda un id diferente en el body

    const index = books.findIndex(b => b.id === id);
    books[index] = book;

    response.json(book);
});

// DELETE "http://localhost:4000/api/books/:id"
server.delete("/api/books/:id", (request: Request, response: Response) => {
    console.log("Client deleting book with ID #" + request.params.id + ". Method:" + request.method + ",Route:" + request.originalUrl);

    const id = +request.params.id;

    const index = books.findIndex(b => b.id === id);
    books.splice(index, 1);

    response.json();
});


// Run the server - "http://localhost:4000"
server.listen(4000, () => {
    console.log("Server is running on port: ", 4000);
});

