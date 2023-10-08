import './BestSeller.css';
import { useState } from 'react';

function BestSeller(): JSX.Element {

    const arr = useState("");
    const name = arr[0];
    const set_name = arr[1];

    const [total_items, set_total_items] = useState(0);



    function show_best_seller() {

        set_name("Bamba");
        set_total_items(420);

    }

    return (
        <div className="BestSeller box">
            <button onClick={show_best_seller}>Best seller</button>

            <br />
            <span>Name: {name}</span>
            <br />
            <span>Total Items: {total_items} </span>

        </div>
    );
}

export default BestSeller;
