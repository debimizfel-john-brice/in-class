async function display_json() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json = await response.json();
        display_todo(json);
        display_stats(json);

    } catch (error) {
        console.log(error.message);
    }
}

function display_todo(todos) {


    const ul_box = document.getElementById("ul_box");

    let list = "";


    for (const todo of todos) {
        const status = todo.completed ? " completed " : "not completed";
        list += `<li>${todo.title} (${status})</li><br>`;
    }
    ul_box.innerHTML = list;

}

function display_stats(todos) {
    const div_box = document.getElementById("div_box");

    let completed = 0;
    let not_completed = 0;

    for (const todo of todos) {
        if (todo.completed) {
            completed++;
        } else {
            not_completed++;
        }
    }

    div_box.innerHTML = `Todos: ${completed + not_completed}<br> Completed: ${completed}<br> Not completed: ${not_completed}`;

}
