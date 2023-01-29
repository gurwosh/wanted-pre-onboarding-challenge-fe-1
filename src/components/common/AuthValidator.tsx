import { useEffect } from "react";
import { useRouter } from 'next/router'
import useToastMessage from "../../hooks/common/useToastMessage";
import { IChildrenProps } from "../../types/children";

const AuthValidator = ({ children }: IChildrenProps) => {
  const router = useRouter();
  const showToast = useToastMessage();
  const isAuthPage = router.pathname === "/auth" || router.pathname === "/signup";

  useEffect(() => {
    const hasToken = !!localStorage.getItem("token");
    if (hasToken && isAuthPage) {
      showToast("warning", "이미 로그인 되어있습니다.");
      router.push("/");
    }
  }, [showToast, isAuthPage]);

  return <>{children}</>;
};

export default AuthValidator;
