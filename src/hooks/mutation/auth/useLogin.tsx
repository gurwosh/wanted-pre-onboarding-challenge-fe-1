import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import AuthAPI from "../../../api/auth";
import { IAuthResponse, IUserInfo } from "../../../types/auth";
import { useRouter } from 'next/router'
import { Router } from "express";

const useLogin = () => {
  const router = useRouter();

  const useMutation= ((userInfo: IUserInfo) => AuthAPI.login(userInfo).then((data)=>
    {
      const token = data.data.token;
      localStorage.setItem("token", token);
      router.push("/");
    })
  )


  return [useMutation]
};

export default useLogin;