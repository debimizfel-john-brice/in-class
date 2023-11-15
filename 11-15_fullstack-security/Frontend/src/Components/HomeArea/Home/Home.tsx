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
import "./Home.css";

function Home(): JSX.Element {

    useTitle("Home");
    
    return (

        <div className="Home">

            {/* Interpolation */}
			<Discount />

            {/* Conditional rendering */}
            <Specials />

            {/* Display Lists */}
            <Desserts />

            {/* Events */}
            <Order />

            {/* Props */}
            <Sale percent={15} category="Drinks" />
            <Sale percent={8} category="Cakes" />

            {/* State */}
            <BestSeller />
            <RandomDiscount />


            {/* Side Effect */}
            <Clock />


            {/* TotalCategories */}
            <TotalCategories /> 
            
        </div>
    );
}

export default Home;
