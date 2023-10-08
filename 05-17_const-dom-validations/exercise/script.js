//* 1
function show_email() {

    const email_box = document.getElementById("email_box");
    const email = email_box.value;

    const p = document.getElementById("p");
    p.innerText = email;
    p.style.backgroundColor = "yellow";

}

//* 2
function show_sum() {
    const number1_box = document.getElementById("number1_box");
    const number2_box = document.getElementById("number2_box");

    const sum = (+number1_box.value) + (+number2_box.value);

    const answer = document.getElementById("answer");
    answer.innerText = sum;
}

//* 3
function send() {
    const full_name_box = document.getElementById("full_name_box");
    const address_box = document.getElementById("address_box");

    const full_name_box_error = document.getElementById("full_name_box_error");
    const address_box_error = document.getElementById("address_box_error");

    full_name_box_error.innerText = "";
    address_box_error.innerText = "";


    const full_name = full_name_box.value;
    const address = address_box.value;

    if (full_name === "") {
        full_name_box_error.innerText = "Please enter your name";
        window.event.preventDefault();
        return;
    }

    if (address === "") {
        address_box_error.innerText = "Please enter your address";
        window.event.preventDefault();
        return;
    }

    if (address.length < 10) {
        address_box_error.innerText = "Please enter a valid address";
        window.event.preventDefault();
        return;
    }

}