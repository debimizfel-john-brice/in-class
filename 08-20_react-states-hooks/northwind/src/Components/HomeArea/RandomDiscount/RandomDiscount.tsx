import { useState } from 'react';
import './RandomDiscount.css';

function RandomDiscount(): JSX.Element {

    const [number, set_number] = useState(0);

    function random_number() {
        set_number(Math.floor(Math.random() * 91));

    }

    return (
        <div className="RandomDiscount box">

            <button onClick={random_number}>Random Discount</button>
            <br />
            <span>Discount: {number}%</span>

        </div>
    );
}

export default RandomDiscount;
