import axios from "axios";
//import config from "../../config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_KEY } from "../../token/token.constant";
import token from "../token";

export const customAxios = axios.create({
  baseURL: "http://localhost:8080",
  headers : {
    [REQUEST_KEY] : token.getToken(ACCESS_TOKEN_KEY)
  }
});