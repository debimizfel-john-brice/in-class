import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    const nameArr = useState(""); // "" is the initial value
    const name = nameArr[0]; // the value we nedded
    const setName = nameArr[1] // A Function for changing the value and rerendering the component.
    
    const [totalItems, setTotalItems] = useState(0); // 0 is the initial value
    
    const showBestSeller = () => {
        setName( "Bamba" ); // a. change the value, b. rerender the component.
        setTotalItems( 420 ); // a. change the value, b. rerender the component.
    }

    return (
        <div className="BestSeller box">

            <button onClick={showBestSeller}>Best Seller</button><br />

            <span> Name: {name} </span><br />
            <span> Total Items: {totalItems} </span>
			
        </div>
    );
}

export default BestSeller;
