import "./Sale.css";

interface SaleProps{
    percent: number;
    category: string;
}

function Sale( props:SaleProps ): JSX.Element {

    return (
        <div className="Sale box">

            <p> { props.percent }% Discount on all {props.category} </p>
			
        </div>
    );
}

export default Sale;
