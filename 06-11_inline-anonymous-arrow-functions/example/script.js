

function show_time() {
    setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString();
        document.getElementById("time").innerHTML = time;
    }, 1000);

    setTimeout(() => {
        alert("hi");
    }, 5000);
}

