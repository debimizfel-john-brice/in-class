function show_content(event) {
    if (event.target.nodeName === "TD") {
        const text = event.target.innerText;
        alert(text);
    }
}