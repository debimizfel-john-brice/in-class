import { useSelector } from 'react-redux';
import './AuthMenu.css';
import { RootState } from '../../../Redux/Store';
import { NavLink } from 'react-router-dom';
import authService from '../../../Services/AuthService';

function AuthMenu(): JSX.Element {

    const user = useSelector((state: RootState) => state.auth.user);

    function logout(): void {
        authService.logout();
    }

    return (
        <div className="AuthMenu">
            {!user && <>
                <span>Hello Guest</span> |
                <NavLink to="/login">Login</NavLink> | <NavLink to="/register">Register</NavLink>
            </>}

            {user && <>
                <span>Hello {user.firstName}</span> |
                <span onClick={logout} className='link'>Logout</span>
            </>}
        </div>
    );
}

export default AuthMenu;
