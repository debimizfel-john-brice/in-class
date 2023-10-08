import './Discount.css';

function Discount(): JSX.Element {

    const percent = 15;
    

    return (
        <div className="Discount box">
            <h5>Disocunt</h5><hr />
            <p>For today: {percent}%</p>
        </div>
    );
}

export default Discount;
