import { useState } from "react";
import "./RandomDiscount.css";

function RandomDiscount(): JSX.Element {

    const [random, setRandom] = useState(0);

    function getRandom():void {
        const random = Math.floor(Math.random() * 90) + 1;
        setRandom(random);
    }

    return (
        <div className="RandomDiscount box">

            <button onClick={getRandom}>Random Discount</button>
            <br />
            <span>Discount: {random}%</span>

        </div>
    );
}

export default RandomDiscount;
