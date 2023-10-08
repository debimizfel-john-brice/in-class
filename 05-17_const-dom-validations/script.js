function change_p() {

    const p = window.document.getElementById("p2");
    console.log(p);
    console.log(p.innerText);
    console.log(p.dir);
    console.log(p.style.color);

    p.innerText = "Hello World";
    p.innerHTML = "Hello<br>World";
    console.log(p.innerText);

    p.dir = "rtl";
    p.style.color = "red";

    console.log(p);
    console.log(p.innerText);
    console.log(p.dir);
    console.log(p.style.color);



}


function show_text() {
    const name_box = document.getElementById("name_box");
    const first_name = name_box.value;
    console.log(first_name);

}