import axios from 'axios';

// Miquel: http://localhost/proyectoDAW/Carendar-LARAVEL/public/index.php/api/saloon
// albaro : http://localhost/Carendar/Carendar-LARAVEL/public/index.php/api/
const instance = axios.create({
  baseURL: 'http://localhost/proyectoDAW/Carendar-LARAVEL/public/index.php/api/',
});

export default instance;
