import "./Specials.css";

function Specials(): JSX.Element {

    function isWeekend(): boolean {
        const d = new Date();
        const day = d.getDay() + 1;
        return day >= 6;
    }

    function isLessonToday(): boolean {
        const d = new Date();
        const day = d.getDay() + 1;
        return day === 1 || day === 4;
    }

    const food = isWeekend() ? 'Zukini' : 'Pizza';

    return (
        <div className="Specials box">

            <p>Our Specials:</p>
            <span>{food}</span>

            <br />

            {isLessonToday() && <span>Sushi</span>}

        </div>
    );
}

export default Specials;
