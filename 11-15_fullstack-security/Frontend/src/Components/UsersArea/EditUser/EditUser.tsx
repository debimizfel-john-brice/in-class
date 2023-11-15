import { useForm } from "react-hook-form";
import "./EditUser.css";
import UserModel from "../../../Models/UserModel";
import notifyService from "../../../Services/NotifyService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import usersService from "../../../Services/UsersService";

function EditUser(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<UserModel>();
    const navigate = useNavigate();


    useEffect(() => {

        const user = usersService.getUser();
        setValue("userId", user.userId );
        setValue("firstName", user.firstName );
        setValue("lastName", user.lastName );
        setValue("username", user.username );
        setValue("password", user.password );

    }, []);
    

    const update = async (user:UserModel) => {

        try {
            
            await usersService.update(user);
            notifyService.success("Updated!");
            navigate("/home");

        } catch (error:any) {
            notifyService.error( error );
        }

    }

    return (
        <div className="EditUser">

            <form className="box" onSubmit={handleSubmit(update)}>

            <h2>Update</h2>

            <input type="hidden" { ...register("userId") } />

            <div className="form-control">
                <label>First Name:</label>
                <input type="text" {...register("firstName")} />
            </div>

            <div className="form-control">
                <label>Last Name:</label>
                <input type="text" {...register("lastName")} />
            </div>

            <div className="form-control">
                <label>Username:</label>
                <input type="text" {...register("username")}/>
            </div>

            <div className="form-control">
                <label>Password:</label>
                <input type="password" {...register("password")}/>
            </div>

            <button>Update</button>

            </form>
			
        </div>
    );

}

export default EditUser;
