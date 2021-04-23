import axios from 'axios';

// MiquelUbuntu: http://localhost/carendar/laravel/Carendar-LARAVEL/public/index.php/api/
// Miquel: http://localhost/proyectoDAW/Carendar-LARAVEL/public/index.php/api/saloon
// albaro : http://localhost/Carendar/Carendar-LARAVEL/public/index.php/api/
const instance = axios.create({
  baseURL: 'http://localhost/proyectoDAW/Carendar-LARAVEL/public/index.php/api/',
});

export default instance;
