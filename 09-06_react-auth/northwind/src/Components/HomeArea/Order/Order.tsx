import { SyntheticEvent } from "react";
import "./Order.css";
import { log } from "console";

function Order(): JSX.Element {

    const orderCoffee = () => {
        alert('Coffee Ordered...')
    }

    const orderCake = (args: SyntheticEvent) => {
        console.log((args.target as HTMLButtonElement).innerText);
    }

    const order1 = (item: string) => {
        alert(`Oreder:  ${item}`);
    }

    const order2 = (item: string, args: SyntheticEvent) => {
        alert(`Oreder:  ${item}`);
        console.log(args.target);
    }

    return (
        <div className="Order box">
            <p>Oreder Somthing:</p>

            <button onClick={orderCoffee}>Coffee</button>
            <button onClick={orderCake}>Cake</button>

            <button onClick={() => order1('Tea')}>Order 1...</button>
            <button onClick={() => order1('Kola')}>Order 1...</button>
            <button onClick={e => order2('Hot Chocolate', e)}>Order 2...</button>

        </div>
    );
}

export default Order;
