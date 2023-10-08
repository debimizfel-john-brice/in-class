import axios from "axios";
import { store } from "../Redux/Store";

class InterceptorService {

    public creareInterceptros(): void {
        axios.interceptors.request.use(request => {
            const token = store.getState().auth.token;

            if (token) {
                request.headers['Authorization'] = `Bearer ${token}`;
            }

            return request;
        });
    }

}

const interceptorService = new InterceptorService();
export default interceptorService;