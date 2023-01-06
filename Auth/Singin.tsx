import { api } from "../pages/api"
import Router, { useRouter } from "next/router";
import { useState,useEffect } from "react"

const Singin =() =>{

    const router = useRouter();
    const [password,setPassword] = useState({'email': '','password': ''})
    const [buttonpass, SetBtnpass] =useState<Boolean>(false)
    const [buttonemail, SetEmapass] = useState<Boolean>(false)

    const onChange = (e:any) => {
      password['password'] = e.target.value;
      setPassword(password)
      if(password['password'].length>=8){
        SetBtnpass(true)
      }
      else{
        SetBtnpass(false)
      }
    };
  
  
     const onIdchange =(e:any)=>{

      password['email'] = e.target.value; 
      let str1 = password['email']
      setPassword(password)
      if(str1.includes('@')&&str1.includes('.')){
        SetEmapass(true)
      }
      else{
        SetEmapass(false)
      }
    };
  

    const BtnActive =()=>{
    
      if(buttonpass && buttonemail){
        return <button onClick={sendData}>회원가입 버튼!!</button>
      }
      else{
        return <button onClick={sendData} disabled>회원가입 버튼!!</button>

      }

    }



  const sendData = () =>{
  
    api.fetchSignIn(password).then((data)=>{
      console.log(data)
    })}
    return(
        <>
        <div><input onChange={onIdchange} placeholder='id를 입력해주세요'/></div>  
        <div><input onChange={onChange} placeholder='비밀번호를 입력해주세요'/></div>
        <div>{BtnActive()}</div>
        </>
    )
   
   }
   

   export default Singin