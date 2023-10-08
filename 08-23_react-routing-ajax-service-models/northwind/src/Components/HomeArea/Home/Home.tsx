import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Order from "../Order/Order";
import RandomDiscount from "../RandomDiscount/RandomDiscount";
import Sale from "../Sale/Sale";
import Specials from "../Specials/Specials";
import Test from "../Test/Test";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            {/* Interpolation */}
            <Discount />

            <Specials />
            <Desserts />
            <Order />

            <Sale precent={15} category={'Drinks'} />
            <Sale precent={8} category={'Cakes'} />

            <BestSeller />

            <RandomDiscount />

            <Clock />

            <Test />
        </div>
    );
}

export default Home;
