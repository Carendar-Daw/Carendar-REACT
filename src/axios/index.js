import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


const instance = axios.create({
    baseURL: 'http://localhost/Carendar/Carendar-LARAVEL/public/index.php/api/'
});

export default instance;