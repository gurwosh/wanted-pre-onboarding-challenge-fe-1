import client from "./client";
import { IUserInfo } from "../types/auth";
const API_ENDPOINT = 'http://localhost:8080' ;

const AuthAPI = {
  signUp: (data: IUserInfo) => {
    return fetch(`${API_ENDPOINT}/users/create`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data['email'],
        password: data['password']
      }),


    }).then(res =>
      res.json()
    )
  },
  login: (data: IUserInfo) => {
    return client.post("/users/login", data);
  },
};

export default AuthAPI;