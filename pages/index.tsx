import { useState,useEffect } from "react"
import {api} from "./api"
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import Singin from "../Auth/Singin";
import Login from "../Auth/login";


export default function Home() {

  const[todos,Settodos] =useState()
  const[Detail, Setdetail] =useState({'title':'','contents':''})

  useEffect(()=>{
    if(localStorage.getItem('login')){
      api.fetchTodos(localStorage.getItem('login')).then((data)=>{
        console.log(data)
      })
    }
  },[])

  const gologin =() =>{
    Router.push(`/loginpage`);

  }

  const gosignin=()=>{
    Router.push(`/sigininpage`);

  }

  const titleInput=(e:any)=>{
    Detail['title'] = e.target.value;
    Setdetail(Detail)
  }


  const contentsInput=(e:any)=>{
    Detail['contents'] = e.target.value;
    Setdetail(Detail)
    console.log(Detail)
  }

  const senddata =()=>{
     api.fetchCreateTodos(Detail,localStorage.getItem('login')).then((data)=>
     console.log(data) 
     )
    
  }






  const Detailtodo =()=>{

    return(
    <>
      <input placeholder="title을 입력해주세요" onChange={titleInput}></input>
      <input placeholder="contents를 입력해주세요" onChange={contentsInput}></input>
      <button onClick={senddata}>컨텐츠 전송하기</button>

    </>)

  }



  return (
    <>
    <div>
    <button onClick={gologin}>로그인페이지로</button>
    <button onClick={gosignin}>회원가입페이지로</button>
    </div>
    <div>
    {}
    </div>
    <div>
    {Detailtodo()}
    </div>
    </>

  )
}
