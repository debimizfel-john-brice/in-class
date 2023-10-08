//^ OOP


var person = {
    firstName: "Bob",
    lastName: "Stuart",
    address: "NY",
    email: "d@d.com",
    phone: "3565865432"
}

// //^  Display
// console.log(person); // Bob
// document.write(person); // [object Object]

// //^ Change value
// person.address = "miami";


// console.log(person.credictCard); // not existing field
// person.credictCard = " 2345678987654"; // create a new field in the object
// console.log(person); // show the new object

//& ------------------------------------------


var movie = {
    name: "The Super Mario Bros",
    description: "The Super Mario Bros. Movie is a 2023 computer-animated adventure film based on Nintendo's Mario video game franchise. Produced by Universal Pictures, Illumination, and Nintendo, and distributed by Universal, the film was directed by Aaron Horvath and Michael Jelenic and written by Matthew Fogel. The ensemble voice cast includes Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, and Fred Armisen. The film features an origin story for the brothers Mario and Luigi, Italian-American plumbers who are transported to an alternate world and become entangled in a battle between the Mushroom Kingdom, led by Princess Peach, and the Koopas, led by Bowser.",
    duration: "1h 32m",
    director: "Aaron Horvath and Michael Jelenic",
}

console.log(movie.name + "<br>");
console.log(movie.description + "<br>");
console.log(movie.duration + "<br>");
console.log(movie.director + "<br>");

movie.yearReleased = "April 5, 2023";
console.log(movie.yearReleased + "<br>");

delete movie.description;
console.log(movie.description + "<br>");
console.log("------------------------------------");


//& -----------------------------------------------------



//^ for-in
for (var field in movie) {
    console.log(field);
}

console.log("------------------------------------");

for (var field in movie) {
    console.log(field + ": " + movie[field]);
}

console.log("------------------------------------");


//& -----------------------------------------------------

for (var field in person) {
    console.log(field + ": " + person[field]);
}

console.log("------------------------------------");
