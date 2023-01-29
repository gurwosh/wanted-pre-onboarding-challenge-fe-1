import { Outlet } from "react-router-dom";
import { useRouter } from 'next/router'
import Login from "../../components/Auth/Login";
import AuthValidator from "../../components/Common/AuthValidator";

const Auth = () => {
  const router = useRouter();
  const isSignUpPage = router.pathname === "/signup";

  return isSignUpPage ? <Outlet /> : <Login />;
};

const RealAuth =()=>{

  return (
    <AuthValidator>
      <Auth/>
    </AuthValidator>
  )
}



export default RealAuth;