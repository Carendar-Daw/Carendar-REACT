import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/proyectoDAW/Carendar-LARAVEL/public/index.php/api/',
});

export default instance;
