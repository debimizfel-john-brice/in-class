import "./Clock.css";
import { useEffect, useState } from "react";

function Clock(): JSX.Element {

    const getTime = () => new Date().toLocaleTimeString();
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = getTime();
            setTime(now);
            // console.log(now);

        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="Clock box">
            <span>Current Time: {time}</span>
        </div>
    );
}

export default Clock;
