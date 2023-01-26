import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

import AuthAPI from "../../../api/auth";
import { IAuthResponse, IUserInfo } from "../../../types/auth";
import { useRouter } from 'next/router'

const useSignUp = () => {
  const router = useRouter()

  return useMutation((userInfo: IUserInfo) => AuthAPI.signUp(userInfo), {
    onSuccess: (data: AxiosResponse<IAuthResponse>) => {
      const token = data.data.token;
      localStorage.setItem("token", token);
      router.push("/");
    },
  });
};

export default useSignUp;