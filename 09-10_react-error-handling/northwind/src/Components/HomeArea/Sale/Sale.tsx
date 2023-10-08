import "./Sale.css";

interface SaleProps {
    precent: number;
    category: string;
}

function Sale(props: SaleProps): JSX.Element {
    return (
        <div className="Sale box">

            <p>{props.precent}% Discount on all {props.category}</p>

        </div>
    );
}

export default Sale;
