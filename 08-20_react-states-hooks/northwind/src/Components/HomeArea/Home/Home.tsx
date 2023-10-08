import BestSeller from '../BestSeller/BestSeller';
import Clock from '../Clock/Clock';
import Desserts from '../Desserts/Desserts';
import Discount from '../Discount/Discount';
import Order from '../Order/Order';
import RandomDiscount from '../RandomDiscount/RandomDiscount';
import Sale from '../Sale/Sale';
import Specials from '../Specials/Specials';
import './Home.css';

function Home(): JSX.Element {
    return (
        <div className="Home">
            {/* Interpolation */}
            <Discount></Discount>

            {/* Conditional rendering */}
            <Specials></Specials>

            {/* Display lists */}
            <Desserts></Desserts>

            {/* Events */}
            <Order></Order>

            {/* Props */}
            <Sale percent={15} category="Drinks"></Sale>
            <Sale percent={8} category={"Cakes"}></Sale>

            {/*  */}
            <BestSeller></BestSeller>

            {/*  */}
            <RandomDiscount></RandomDiscount>

            {/*  */}
            <Clock></Clock>
        </div>
    );
}

export default Home;
