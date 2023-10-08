import { useState } from 'react';
import './TotalCategories.css';
import products_service from '../../../Services/ProductsService';
import notifyService from '../../../Services/NotifyService';

function TotalCategories(): JSX.Element {

    const [totalCategories, setTotalCategories] = useState<number>(0);

    async function showTotalCategories(): Promise<void> {
        try {
            const categories = await products_service.categories();
            setTotalCategories(categories.length);

        } catch (error: any) {
            notifyService.error(error);
        }
    }


    return (
        <div className="TotalCategories box">
            <button onClick={showTotalCategories}>Total categories</button>

            <p>Total categories: {totalCategories}</p>
        </div>
    );
}

export default TotalCategories;
