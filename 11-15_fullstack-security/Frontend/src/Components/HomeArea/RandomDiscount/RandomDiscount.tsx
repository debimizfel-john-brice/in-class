import { useEffect, useState } from "react";
import "./RandomDiscount.css";

function RandomDiscount(): JSX.Element {
    
    const [randomDiscount, setRandomDiscount] = useState(0);
    
    useEffect(() => {
        // console.log("AJAX...");
    },[]);
    
    const createRandomNumber = (): void => {
        const random = Math.floor( Math.random() * 91 );
        setRandomDiscount(random);
    }
    

    return (
        <div className="RandomDiscount box">

            <button onClick={createRandomNumber}>Random Discount</button>
            <br />
            <span>Discount: {randomDiscount}% </span>
			
        </div>
    );
}

export default RandomDiscount;
