async function display_json() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();

        display_table(json);

    } catch (error) {
        console.log(error.message);
    }
}

function display_table(users) {
    const table_box = document.getElementById("table_box");

    let table = "";
    for (const user of users) {

        table += `<tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
          </tr>`;
    }
    table_box.innerHTML = table;
}