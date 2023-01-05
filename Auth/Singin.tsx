import { api } from "../pages/api"
import Router, { useRouter } from "next/router";
import { useState,useEffect } from "react"

const Singin =() =>{

    const router = useRouter();
    const [password,setPassword] = useState({'email':'','password': ''})
  
    const onChange = (e:any) => {
      password['password'] = e.target.value;
      setPassword(password)
    };
  
  
     const onIdchange =(e:any)=>{

      password['email'] = e.target.value; 
      setPassword(password)
    };
  





  const sendData = () =>{
  
    api.fetchSignIn(password).then((data)=>{
  
      console.log(data)
    })}
    return(
        <>
        <div><input onChange={onIdchange} placeholder='id를 입력해주세요'/></div>  
        <div><input onChange={onChange} placeholder='비밀번호를 입력해주세요'/></div>
        <div><button onClick={sendData}>로그인 버튼!!</button></div>
        </>
    )
   
   }
   

   export default Singin