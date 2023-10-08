(() => {

    const say_hi_btn = document.getElementById("say_hi_btn");
    say_hi_btn.addEventListener("click", say_hi);

    function say_hi() {
        alert('Hello World');
    }

})();
