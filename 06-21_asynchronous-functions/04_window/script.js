//& new
"use strict";

(() => {

    const sum = document.getElementById("sum");
    sum.addEventListener("click", () => {
        sum = 0; //^ won't work
        for (let i = 1; i <= 100; ++i) {
            sum += i;
        }
        alert(sum);
    });

    const str = document.getElementById("str");
    str.addEventListener("click", () => {

        let s = "hello";
        console.log(s);
        console.log(s[0]);

        s[0] = "b"; //^ won't work
        console.log(s);
        console.log(s[0]);

        s = "world";
        console.log(s);
        console.log(s[0]);
    });

})();