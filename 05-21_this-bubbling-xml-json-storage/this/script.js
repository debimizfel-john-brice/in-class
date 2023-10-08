
function show_content() {
    if (event.target.nodeName === "TD") {
        const text = event.target.innerText;
        alert(text);
    }
}