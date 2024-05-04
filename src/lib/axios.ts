import axios from "axios";

const defaultOptions = {
    baseURL: "http://localhost:5117/api",
    headers: {
        'Content-Type': 'application/json',
    },
};

// Create instance
const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export { axiosInstance }