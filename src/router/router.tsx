import { useRouter } from "next/router";
import Link from "next/link";
import AuthValidator from "../components/Common/AuthValidator";
import Empty from "../components/Common/Empty";
import Auth from "../pages/auth";
import SignUp from "../pages/signup";
import Home from "../pages/home";
import ToDoDetail from "../pages/ToDoDetail[id]";

const Router = () => {
    const router = useRouter();
    const {pagename} = router.query;     

    return (
    <div>
      <li>
        <Link href="/home">home</Link>
      </li>
      <li>  
        <Link href="/signup">signup!</Link>
      </li>
      <li>
        <Link href= "/auth"> auth! </Link> 
     

      </li>

    </div>
  );
};

export default Router;
