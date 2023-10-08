import './Specials.css';

function Specials(): JSX.Element {

    function is_weekend(): Boolean {
        const date = new Date();
        const day = date.getDay() + 1;
        return day >= 6;
    }

    function is_class_today(): Boolean {
        const date = new Date();
        const day = date.getDay() + 1;
        return day === 1 || day === 4;
    }

    return (
        <div className="Specials box">
            <h5>Specials</h5><hr />

            {is_weekend() ? <span>Pizza</span> : <span>Pasta</span>}
            <br />
            {is_class_today() && <span>Sushi</span>}

        </div>
    );
}

export default Specials;
