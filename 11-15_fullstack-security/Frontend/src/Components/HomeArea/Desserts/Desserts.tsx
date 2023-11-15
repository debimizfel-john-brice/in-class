import "./Desserts.css";

function Desserts(): JSX.Element {

    const items = [
        {id: 1, name: "Apple pie", price: 20 },
        {id: 2, name: "Brownie", price: 15 },
        {id: 3, name: "Cheesecake", price: 30 },
        {id: 4, name: "Carrot cake", price: 50 },
    ];

    const test = () => {
        console.log(123);
    }


    const average = () => {

        const arr = [10, 20, 30 ,40];
        let sum = 0;
        test();
        for(let i = 0; i < arr.length -1; i++ ){
            sum += arr[i];
        }
        const avg = sum / arr.length;
        alert("Avg: " + avg );

    }

    return (
        <div className="Desserts box">
            <ul>
                { items.map( item => <li key={item.id}>{ item.name } ({item.price}$) </li> ) }
            </ul>

            <button onClick={average}>Get Averge:</button>
			
        </div>
    );
}

export default Desserts;
