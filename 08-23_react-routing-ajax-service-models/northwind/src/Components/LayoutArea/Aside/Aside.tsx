import { NavLink } from 'react-router-dom';
import './Aside.css';

function Aside(): JSX.Element {
    return (
        <div className="Aside">

            <nav>
                
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/products'}>Products</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </nav>

        </div>
    )
}
export default Aside;