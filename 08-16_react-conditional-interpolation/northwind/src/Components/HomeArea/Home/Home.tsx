import Desserts from '../Desserts/Desserts';
import Discount from '../Discount/Discount';
import Order from '../Order/Order';
import Specials from '../Specials/Specials';
import './Home.css';

function Home(): JSX.Element {
    return (
        <div className="Home">
            <Discount></Discount>
            <Specials></Specials>
            <Desserts></Desserts>
            <Order></Order>
        </div>
    );
}

export default Home;
