import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    // const nameArr = useState('');
    // const name = nameArr[0]
    // const setName = nameArr[1];

    // const totalArr = useState(0);
    // const totalItems = totalArr[0]
    // const setTotalItems = totalArr[1];

    const [name, setName] = useState('');
    const [totalItems, setTotalItems] = useState(0);


    const showBestSeller = () => {
        setName('Bamba');
        setTotalItems(420);
    }

    return (
        <div className="BestSeller box">

            <button onClick={showBestSeller}>Best Seller</button><br />

            <span>Name: {name}</span><br />
            <span>Total Items: {totalItems}</span>

        </div>
    );
}

export default BestSeller;
