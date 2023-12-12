import axios from "axios";

const axiosAdmin = axios.create({
    baseURL: process.env.API_ADMIN_SERVICE,
    headers: { 'Content-Type': 'application/json' }
});
export default axiosAdmin;