
let a: number;
a = 123;

let d: number | string | boolean; //union
d = 10;
d = "10";
d = true;

let e; //any
e = 10;
e = "10";
e = true;


let f: any;
f = 10;
f = "10";
f = true;


let numbers: number[] = []

//* Functions

function f1(x: number, y: string): number {
    document.write(x + "<br>" + y);
    return 10;

}
f1(5, 'a');