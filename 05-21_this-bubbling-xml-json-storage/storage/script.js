function save_to_storage() {

    localStorage.setItem("color", "red");
    localStorage.setItem("font", "green");

}

function read_from_storage() {
    const color = localStorage.getItem("color");
    const font = localStorage.getItem("font");
    alert(color + ", " + font);
}

function delete_from_storage() {
    // localStorage.clear();
    localStorage.removeItem("color");
    localStorage.removeItem("font");
}

//& ----------------------------------

function save_item() {

    //^ Get elements from HTML
    const item_box = document.getElementById("item_box");
    const amount_box = document.getElementById("amount_box");
    const ul_items = document.getElementById("ul_items");

    //^ Get values
    const item = item_box.value;
    const amount = amount_box.value;

    //^ 1. Extract data from storage
    const old_list_str = localStorage.getItem("list");

    //^ 2. Convert json to js array
    let list = (old_list_str === null) ? [] : JSON.parse(old_list_str);

    // let list;
    // if (old_list_str === null) {
    //     list = [];
    // } else {
    //     list = JSON.parse(old_list_str);
    // }

    //^ 3. Add new object to array
    list.push({ item: item, amount: amount });

    // const list_item = {
    //     item: item,
    //     amount: amount
    // }
    // list.push(list_item);

    //^ 4. Conver array to json string
    const new_list_str = JSON.stringify(list);

    //^ 5. Save json string to storage
    localStorage.setItem("list", new_list_str);

    item_box.value = "";
    amount_box.value = "";
    item_box.focus();

    //^ Display list
    ul_items.innerHTML = "";
    for (const obj of list) {
        ul_items.innerHTML += `<li>Item: ${obj.item}, Amount: ${obj.amount}</li>`
    }

}


function clear() {


    const list_str = localStorage.getItem("list");

    localStorage.clear(list_str);

}


function load_list() {

    const ul_items = document.getElementById("ul_items");
    const list_str = localStorage.getItem("list");
    let list = (list_str === null) ? [] : JSON.parse(list_str);

    for (const obj of list) {
        ul_items.innerHTML += `<li>Item: ${obj.item}, Amount: ${obj.amount}</li>`

    }

}

load_list();
