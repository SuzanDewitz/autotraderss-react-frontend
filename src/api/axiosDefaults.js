import axios from "axios";

axios.defaults.baseURL = 'https://autotraderss-drf-backend.onrender.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();