import './Order.css';
import { SyntheticEvent } from "react";

function Order(): JSX.Element {

    function order_coffee() {
        alert("Your coffee is ready!");
    }

    function order_cake(event: SyntheticEvent) {
        const cake = (event.target as HTMLButtonElement).innerHTML;
        alert(`Your ${cake} is ready!`);
    }

    function order(event: SyntheticEvent, item: string) {
        alert(`Order: ${item}`);
    }

    function order3(item: string): (event: SyntheticEvent) => void {
        function process_order(event: SyntheticEvent) {
            alert(`Order: ${item}`);
        }
        return process_order;
    }

    return (
        <div className="Order box">
            <p>Order:</p>
            <button onClick={order_coffee}>Coffee</button>
            <button onClick={order_cake}>Cake</button>

            <button onClick={e => order(e, "")}>Cake</button>
            <button onClick={order3("cake")}>Cake</button>

        </div>
    );
}

export default Order;
