import useTitle from "../../../Hooks/useTitle";
import TotalCategories from "../../ProductsArea/TotalCategories/TotalCategories";
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
    useTitle("Home");

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

            <TotalCategories />
        </div>
    );
}

export default Home;
