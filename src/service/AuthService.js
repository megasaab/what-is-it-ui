import axios from "axios";

export default class AuthService {
    static async login(email, password) {
        return axios.post('http://localhost:5000/auth/login', { email, password });
    };

    static async registration(email, password, firstName, lastName) {
        return axios.post('http://localhost:5000/auth/register', { email, password, firstName, lastName });
    };
   
};