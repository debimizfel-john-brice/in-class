async function display_json() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const json = await response.json();

        display_table(json);

    } catch (error) {
        console.log(error.message);
    }
}

function display_table(photos) {
    const table_box = document.getElementById("table_box");

    let table = "";
    for (const photo of photos) {

        table += `<tr>
                <td>${photo.title}</td>
                <td><img src="${photo.url}" alt=""></td>
              </tr>`;
    }
    table_box.innerHTML = table;
}