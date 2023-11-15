import { useSelector } from "react-redux";
import "./TotalProducts.css";
import { RootState } from "../../../Redux/Store";


function TotalProducts(): JSX.Element {

    // Same as useState just the date coms from the Global State:
    const totalProducts = useSelector((state:RootState) => state.products.productsList.length );

    return (
        <div className="TotalProducts">

            <span>Total Products: {totalProducts} </span>
			
        </div>
    );
}

export default TotalProducts;
