import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


const instance = axios.create({
    baseURL: 'http://localhost/carendar/laravel/Carendar-LARAVEL/public/api/'
});

export default instance;