import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import CredentialsModel from "../../../Models/CredentialsModel";
import notifyService from "../../../Services/NotifyService";

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    const save = async (credentials:CredentialsModel) => {

        try {
            
            await authService.login(credentials);
            notifyService.success("Welcome Back!");
            navigate("/home");

        } catch (error:any) {
            notifyService.error( error );
        }

    }

    return (
        <div className="Login">

            <form className="box" onSubmit={handleSubmit(save)}>

                <h2>Login</h2>
                
                <div className="form-control">
                    <label>Username:</label>
                    <input type="text" {...register("username")}/>
                </div>
                
                <div className="form-control">
                    <label>Password:</label>
                    <input type="password" {...register("password")}/>
                </div>

                <button>Login</button>

            </form>
			
        </div>
    );
}

export default Login;
