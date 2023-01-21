import { useState,useEffect } from "react"
import {api} from "./api"
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import Singin from "../Auth/Singin";


export default function Home() {


  return (
    <>
    <Singin/>
    </>

  )
}