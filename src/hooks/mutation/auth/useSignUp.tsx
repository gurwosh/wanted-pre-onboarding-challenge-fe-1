import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { useRouter } from 'next/router'
import AuthAPI from "../../../api/auth";
import { IAuthResponse, IUserInfo } from "../../../types/auth";

const useSignUp = () => {

  const router = useRouter()

  const useMutation = ((userInfo: IUserInfo) => AuthAPI.signUp(userInfo).then(
    data => console.log(data)
  )
  )

  return[useMutation]

};

export default useSignUp;