import { useState,useEffect } from "react"
import {api} from "./api"
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import Singin from "../Auth/Singin";
import Login from "../Auth/login";


export default function Home() {

  const gologin =() =>{
    Router.push(`/loginpage`);

  }

  const gosignin=()=>{
    Router.push(`/sigininpage`);

  }




  return (
    <>
    <button onClick={gologin}>로그인페이지로</button>
    <button onClick={gosignin}>회원가입페이지로</button>

    </>

  )
}
