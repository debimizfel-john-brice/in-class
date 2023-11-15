import { useNavigate } from "react-router-dom";
import { store } from "../Redux/Store";
import { useEffect } from "react";


// Custom Hook
function useVerifyLoggedIn(){

    const navigate = useNavigate();

    useEffect(() => {
        const token = store.getState().auth.token;
        if( !token ){
            navigate("/login");
        }
    },[])


}
export default useVerifyLoggedIn;