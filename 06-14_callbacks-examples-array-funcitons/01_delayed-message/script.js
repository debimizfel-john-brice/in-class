function delayed_message() {
    const message = prompt("Enter message");
    const sec = +prompt("Enter seconds");

    setTimeout(() => {
        alert(message);
    }, 1000 * sec)
}