import { useForm } from 'react-hook-form';
import './Register.css';
import UserModel from '../../../Models/UserModel';
import authService from '../../../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import notifyService from '../../../Services/NotifyService';

function Register(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

   async function save(user:UserModel){

        try {
           await authService.register(user);
           notifyService.success("Welcome");
           navigate("/home");
        } catch (error:any) {
            notifyService.error(error);
        }

    }


    return (
        <div className="Register">

            <form action="" className='box' onSubmit={handleSubmit(save)}>
                <h2>Register</h2>

                <div className="input-control">
                    <label>First Name:</label>
                    <input type="text" {...register("firstName")} />
                </div>

                <div className="input-control">
                    <label>Last Name:</label>
                    <input type="text" {...register("lastName")} />
                </div>

                <div className="input-control">
                    <label>Email:</label>
                    <input type="email" {...register("email")} />
                </div>

                <div className="input-control">
                    <label>Password:</label>
                    <input type="password" {...register("password")} />
                </div>

                <button>Register</button>
            </form>


        </div>
    );
}

export default Register;
