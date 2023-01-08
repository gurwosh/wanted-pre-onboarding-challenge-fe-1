import { useState,useEffect } from "react"
import {api} from "./api"
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import Singin from "../Auth/Singin";
import Login from "../Auth/login";


export default function Home() {

  const[Detail, Setdetail] =useState({'title':'','contents':''})
  const[tabledata,setTable] = useState([]);
  const[Detailtitle,Settitle] = useState< String | null>(null);
  const[Detailcontent,Setcontent] = useState< String | null>(null);


  useEffect(()=>{
    let k = localStorage.getItem('title') ? localStorage.getItem('title'): '';
    let w = localStorage.getItem('content') ? localStorage.getItem('content'): '';

    Settitle(k)
    Setcontent(w)
    
    if(localStorage.getItem('login')){
      api.fetchTodos(localStorage.getItem('login')).then((data)=>{
          setTable(data['data'])
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

  const displaytodo = () =>{

    let result = []
   for(let i in tabledata){
    result.push(<div onClick={viewdetail} key={i} id={i} ><p>title : {tabledata[i]['title']}</p></div>)
   }

    return result
  }

  const senddata =()=>{
     api.fetchCreateTodos(Detail,localStorage.getItem('login')).then((data)=>
        location.reload()
     )
    
  }


  const viewdetail = (e: any) => {
    const pid = e.currentTarget.id.toString()
    let k = tabledata[pid]['title']
    let w = tabledata[pid]['content']

    localStorage.setItem('title', k)
    localStorage.setItem('content', w)

    Settitle(k)
    Setcontent(w)
  }


  const Detailtodo =()=>{
    return (<div>{Detailtitle}+{Detailcontent}</div>)
  }


  const Createtodo =()=>{

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
    {displaytodo()}
    {Createtodo()}
    </div>
    <div>
    {Detailtodo()}
    </div>
    </>

  )
}
