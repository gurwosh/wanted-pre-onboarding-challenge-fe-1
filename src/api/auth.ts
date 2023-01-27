import client from "./client";
import { IUserInfo } from "../types/auth";
const API_ENDPOINT = 'http://localhost:8080' ;

const AuthAPI = {
  signUp: (data: IUserInfo) => {
    return client.post("/users/create", data);
  },
  login: (data: IUserInfo) => {
    return client.post("/users/login", data);
  },
};

export default AuthAPI;