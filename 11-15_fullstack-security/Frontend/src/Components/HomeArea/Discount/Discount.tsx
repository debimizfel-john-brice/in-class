import "./Discount.css";

function Discount(): JSX.Element {

    const percent = 8; // Demo for getting data from server...

    return (
        <div className="Discount box">
			<p>Discount For Today: {percent}%</p>

        </div>
    );
}

export default Discount;
