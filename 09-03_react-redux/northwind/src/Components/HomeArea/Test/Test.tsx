import { useEffect, useState } from "react";
import "./Test.css";

function Test(): JSX.Element {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log('rendered!');
    }, [count]);

    return (
        <div className="Test box">
            <button onClick={() => setCount(count + 1)}>+</button><br />
            <button onClick={() => setCount(count - 1)}>-</button><br />
            <button onClick={() => setCount(5)}>Unrender</button><br />
            You clickd: {count} times!

        </div>
    );
}

export default Test;
