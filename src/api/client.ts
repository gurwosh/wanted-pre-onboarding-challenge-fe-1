import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { IError } from "../types/axios";
import { toast } from "react-toastify";

const baseURL = 'http://localhost:8080' //string = process.env.REACT_APP_BASE_URL as string;

const client = axios.create({ baseURL });

client.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {};
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError<IError>) => {
    const isTokenMissing = error.response?.data.details === "Token is missing";

    if (isTokenMissing) {
      toast.dismiss();
      toast.clearWaitingQueue();
      toast.warning("로그인을 해주세요.");
    } else {
      toast.dismiss();
      toast.clearWaitingQueue();
      toast.warning(error.response?.data.details);
    }

    return Promise.reject(error);
  }
);

export default client;