let page = 1;
let total = 1;
async function display_json() {

    try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const json = await response.json();

        total = json.total_pages;
        display_table(json);

    } catch (error) {
        console.log(error.message);
    }
}

function page_2() {
    if (page > total) return;
    page++;
    display_json();

}

function display_table(users) {
    const table_box = document.getElementById("table_box");

    users.page = '2';
    let table = "";
    for (const user of users.data) {

        table += `<tr>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td><img src="${user.avatar}" alt=""></td>
              </tr>`;
    }
    table_box.innerHTML += table;
}

