import { spawn } from "child_process";
import "./Specials.css";

function Specials(): JSX.Element {


    function isWeekend():Boolean {
        const d = new Date();
        const day = d.getDay() + 1; // Starts from 0
        return day >= 6;
    }

    function isLessonToday():boolean{
        const d = new Date();
        const day = d.getDay() + 1; // Starts from 0
        return day === 1 || day === 4;
    }

    // Pinchas way
    // const food = isWeekend() ? "Zukini" : "Pizza";


    return (
        <div className="Specials box">
            
            <p>Our Specials:</p>
            {/* conditional rendering - first way -  ternary operator */}
            { isWeekend() ? <span>Zukini</span> : <span>Pizza</span> }
            
            {/* Pinchas way */}
            {/* <span>{ food }</span> */}
            <br />

            {/* conditional rendering - second way - short circuit */}
            { isLessonToday() && <span>Sushi</span> }

            
        </div>
    );
}

export default Specials;
