import "./Discount.css";

function Discount(): JSX.Element {

    const percent = 15;

    return (
        <div className="Discount box">
			<p>Discount for Today: {percent}%</p>
        </div>
    );
}

export default Discount;
