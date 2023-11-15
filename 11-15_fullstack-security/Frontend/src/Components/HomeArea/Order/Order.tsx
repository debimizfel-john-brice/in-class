import { SyntheticEvent } from "react";
import "./Order.css";
import notifyService from "../../../Services/NotifyService";

function Order(): JSX.Element {

    const orderCoffee = () => {
        notifyService.success("Coffee Ordered...")
    }

    const orderCake = ( args:SyntheticEvent ) => {
        console.log( args );
        console.log( args.target );
        console.log( ( args.target as HTMLButtonElement ).innerHTML );
    }

    const order1 = ( item:string ) => {
        notifyService.success(`Order: ${item}`);
    }

    const order2 = (args:SyntheticEvent, item:string ) => {
        notifyService.success(`Order: ${item}`);
    }


    return (
        <div className="Order box">

            <p>Order Something:</p>

            <button onClick={orderCoffee}>Coffee</button>
            <button onClick={orderCake}>Cake</button>

            {/* Without SyntheticEvent */}
            <button onClick={ () => order1("tea") } >Order tea</button>
            
            {/* With SyntheticEvent */}
            <button onClick={ e => order2( e, "Hot Chocolate") }>Order Hot Chocolate</button>

        </div>
    );
}

export default Order;
