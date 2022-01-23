import axios from "axios";
import { BASE_API_URL } from "../http/http";


export default class AuthService {
    static async login(email, password) {
        return axios.post(`${BASE_API_URL}/auth/login`, { email, password });
    };

    static async registration(email, password, firstName, lastName) {
        return axios.post(`${BASE_API_URL}/auth/register`, { email, password, firstName, lastName });
    };
   
};