import { useState } from "react";
import { useRouter } from 'next/router'

import LoginView from "./Views/LoginView";
import { ILoginProps } from "./types";
import useLogin from "../../hooks/mutation/auth/useLogin";
import { emailValidator, passwordValidator } from "../../utils/validator";

const Login = () => {
  const router = useRouter();
  const [loginMutate] = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validData, setValidData] = useState({
    isEmailValid: false,
    isPasswordValid: false,
  });
  const isNotEnterEmail = email.length === 0;
  const isNotEnterPassword = password.length === 0;

  const loginProps: ILoginProps = {
    email,
    password,
    onEmailChange: (e) => {
      emailValidator(e.target.value)
        ? setValidData((p) => ({ ...p, isEmailValid: true }))
        : setValidData((p) => ({ ...p, isEmailValid: false }));
      setEmail(e.target.value);
    },
    onPasswordChange: (e) => {
      passwordValidator(e.target.value)
        ? setValidData((p) => ({ ...p, isPasswordValid: true }))
        : setValidData((p) => ({ ...p, isPasswordValid: false }));
      setPassword(e.target.value);
    },
    onLogin: () => loginMutate({email,password}),
    onGoToSignUp: () => router.push("/signup"),
    validData,
    isNotEnterEmail,
    isNotEnterPassword,
  };

  return <LoginView {...loginProps} />;
};

export default Login;
