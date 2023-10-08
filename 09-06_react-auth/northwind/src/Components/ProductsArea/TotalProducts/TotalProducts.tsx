import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/Store';
import './TotalProducts.css';

function TotalProducts(): JSX.Element {

    const total_products = useSelector((state: RootState) => state.products.productsList.length);

    return (
        <div className="TotalProducts">
            <span>Total products: {total_products}</span>
        </div>
    );
}

export default TotalProducts;
