import { useState } from "react";
import "./TotalCategories.css";
import productsService from "../../../Services/ProductsService";
import notifyService from "../../../Services/NotifyService";

function TotalCategories(): JSX.Element {

    const [totalCategories, setTotalCategories ] = useState<number>(0);

    const showTotalCategories = async ():Promise<void> => {
        try {
            const categories = await productsService.getAllCategories();
            setTotalCategories(categories.length);
        } catch (error:any) {
            notifyService.error( error );
        }
    }

    return (
        <div className="TotalCategories box">
            <button onClick={showTotalCategories}>Total Categories</button>
            <p>Total Categories: {totalCategories} </p>
        </div>
    );
}

export default TotalCategories;
