function display() {
    const cat = {
        name: "Cat",
        age: 4,
        color: {
            eyes: "grey",
            fur: "black"
        },
        address: {
            city: "Jerusalem",
            street: "Jafa",
            number: 55
        },
        food: {
            soft: {
                type: "fish",
                time: "10:00"
            },
            hard: {
                type: "apple",
                time: "17:00"
            }
        }
    }

    print_obj_values(cat);
}

function print_obj(obj) {

    for (const o in obj) {
        if (typeof obj[o] === "object") { print_obj(obj[o]) }
        document.write(o);
    }

}


function print_obj_values(obj) {

    for (const o in obj) {
        if (typeof obj[o] === "object") {
            document.write(`<h3>${o}</h3>`);
            print_obj_values(obj[o]);
        } else {

            document.write(obj[o] + "<br>");
        }
    }

}