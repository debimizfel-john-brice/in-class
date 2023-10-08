async function display_html() {

    try {
        const html_box = document.getElementById("html_box");
        const url = 'https://www.manutd.com';

        const response = await fetch(url);
        const html = await response.text();
        html_box.innerHTML = html;

    } catch (error) {
        alert(error.message);
    }
}

async function display_json() {

    try {
        const ul_box = document.getElementById("ul_box");
        const url = 'https://jsonplaceholder.typicode.com/comments';

        const response = await fetch(url);
        const json = await response.json();

        let list = '';
        for (const person of json) {
            list += `<li>${person.name} </li><li>${person.email} </li><br>`;
        }

        ul_box.innerHTML = list;

    } catch (error) {
        console.log(error.message);
    }
}

