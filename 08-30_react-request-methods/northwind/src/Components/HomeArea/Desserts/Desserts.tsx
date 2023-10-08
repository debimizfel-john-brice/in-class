import "./Desserts.css";

function Desserts(): JSX.Element {

    const items = [
        { id: 1, name: 'Aplle pie', price: 20 },
        { id: 2, name: 'Brownie', price: 15 },
        { id: 3, name: 'Cheesecake', price: 30 },
        { id: 4, name: 'Carrot cake', price: 50 }
    ];

    return (
        <div className="Desserts box">

            <ul>
                {items.map(item => <li key={item.id}>{item.name} ({item.price}$)</li>)}
            </ul>

        </div>
    );
}

export default Desserts;
