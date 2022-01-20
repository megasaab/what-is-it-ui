import axios from 'axios';

export const BASE_API_URL = 'http://localhost:5000';

const $api = axios.create({
    baseURL: BASE_API_URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
});

export default $api;