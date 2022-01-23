import { makeAutoObservable } from "mobx";
import AuthService from "../service/AuthService";

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email.toLowerCase(), password);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data);
            return response;
        } catch (error) {
            return error;
        }
    }

    async registration(firstName, lastName, email, password) {
        try {
            const response = await AuthService.registration(email.toLowerCase(), password, firstName, lastName);
            console.log(response)
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data);
            return response;
        } catch (error) {
            return error;
        }
    }

    async checkAuth(token) {
        try {
            const response = await AuthService.checkUser(token);
            const user = response.data;
            if (user) {
                this.setUser(user);
                this.setAuth(true);
            }
        } catch(err) {
            return err;
        }
    }

    async logout() {
        localStorage.removeItem('token');
        this.setAuth(false);
    }
    
 
}