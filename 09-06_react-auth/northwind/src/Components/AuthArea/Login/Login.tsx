import { useForm } from 'react-hook-form';
import './Login.css';
import UserModel from '../../../Models/UserModel';
import { useNavigate } from 'react-router-dom';
import authService from '../../../Services/AuthService';
import CredentialsModel from '../../../Models/CredentialsModel';

function Login(): JSX.Element {
    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    async function save(user: CredentialsModel) {

        try {
            await authService.login(user);
            alert("Welcome back");
            navigate("/home");
        } catch (error: any) {
            alert(error.message);
        }

    }


    return (
        <div className="Login">

            <form action="" className='box' onSubmit={handleSubmit(save)}>
                <h2>Login</h2>
                <div className="input-control">
                    <label>Email:</label>
                    <input type="email" {...register("email")} />
                </div>

                <div className="input-control">
                    <label>Password:</label>
                    <input type="password" {...register("password")} />
                </div>

                <button>Login</button>
            </form>


        </div>
    );
}

export default Login;
