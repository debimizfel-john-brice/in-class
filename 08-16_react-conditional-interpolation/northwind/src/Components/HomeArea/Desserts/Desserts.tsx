import './Desserts.css';

function Desserts(): JSX.Element {
    const items = [
        { id: 1, name: "Apple pie", price: 20 },
        { id: 2, name: "Brownie", price: 20 },
        { id: 3, name: "Cheesecake", price: 20 },
        { id: 4, name: "Carrot cake", price: 20 }
    ]
    return (
        <div className="Desserts box">
            <h5>Dessert</h5><hr />
            <ul>
                {items.map(item => <li key={item.id}>{item.name} ({item.price}$)</li>)}
            </ul>
        </div>
    );
}

export default Desserts;
