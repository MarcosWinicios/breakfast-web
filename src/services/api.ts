import { BASE_URL } from './request';
import axios from "axios";

const api = axios.create({
    baseURL: BASE_URL
})

export default api;