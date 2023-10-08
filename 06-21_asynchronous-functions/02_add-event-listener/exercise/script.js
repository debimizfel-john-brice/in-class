(() => {

    const sum = document.getElementById("sum");
    sum.addEventListener("click", () => {
        let sum = 0;
        for (let i = 1; i <= 100; ++i) {
            sum += i;
        }
        alert(sum);
    });

})();