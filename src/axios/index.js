import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.URLAPI,
});

export default instance;
