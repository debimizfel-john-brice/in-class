import { useDispatch, useSelector } from "react-redux";
import "./AuthMenu.css";
import { RootState, store } from "../../../Redux/Store";
import { logout } from "../../../Redux/authSlice";
import { Link, NavLink } from "react-router-dom";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";

function AuthMenu(): JSX.Element {

    const user = useSelector((state:RootState) => state.auth.user);
    // const dispatch = useDispatch(); // Using dispatch in component

    const logoutUser = () => {
        authService.logout();
        notifyService.success("We will miss you...")
        // dispatch(logout()) // Using dispatch in component
    }

    return (
        <div className="AuthMenu">
			{
                !user && <>
                    <span>Hello Guest </span> |
                    <NavLink to="/login">Login</NavLink> | 
                    <NavLink to="/register">Register</NavLink>
                </>
            }
			{
                user && <>
                    <span>Hello {user.firstName} {user.lastName}</span> | <Link to="edit-user">🖊</Link> |
                    <span onClick={logoutUser} className="link">Logout</span>
                </>
            }


        </div>
    );
}

export default AuthMenu;
