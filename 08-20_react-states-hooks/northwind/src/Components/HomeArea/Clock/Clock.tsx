import { useEffect, useState } from 'react';
import './Clock.css';

function Clock(): JSX.Element {


    function get_time() {
        return new Date().toLocaleTimeString();
    }

    const [time, set_time] = useState(get_time());

    useEffect(() => {
        let timer_id = setInterval(() => {
            const now = get_time();
            set_time(now);
        }, 1000);

        return () => clearInterval(timer_id)
    }, []);


    return (
        <div className="Clock box">


            <span>{time}</span>

        </div>
    );
}

export default Clock;
