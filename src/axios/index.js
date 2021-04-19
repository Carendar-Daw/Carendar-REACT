import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


const instance = axios.create({
    baseURL: 'http://localhost/carendar/laravel/Carendar-LARAVEL/public/api/'
});

const AxiosInstance = () => {
    const { getIdTokenClaims, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        getIdTokenClaims().then(({ __raw: idToken }) => {
            instance.defaults.headers.common['Authorization'] = idToken;
        }
    }
}




export default instance;