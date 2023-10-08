import { SyntheticEvent } from "react";
import "./Order.css";
import { log } from "console";
import notifyService from "../../../Services/NotifyService";

function Order(): JSX.Element {

    const orderCoffee = () => {
        notifyService.success("Coffee Ordered...");
    }

    const orderCake = (args: SyntheticEvent) => {
        console.log((args.target as HTMLButtonElement).innerText);
    }

    const order1 = (item: string) => {
        notifyService.success(`Oreder:  ${item}`);
    }

    const order2 = (item: string, args: SyntheticEvent) => {
        notifyService.success(`Oreder:  ${item}`);
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
