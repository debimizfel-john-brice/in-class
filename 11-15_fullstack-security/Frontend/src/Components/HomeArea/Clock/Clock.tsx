import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {

    const getTime = () => new Date().toLocaleTimeString();

    const [ time, setTime ] = useState(getTime());

    useEffect(() => {
        
        let timerId = setInterval(() => {
            const now = getTime();
            setTime(now);
            // console.log(now);
        }, 1000 );

        // .... we need to kill the timer
        return () => clearInterval(timerId); 

    },[])

    


    return (
        <div className="Clock box">
            <span>{time}</span>
        </div>
    );
}

export default Clock;
