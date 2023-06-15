"use client"
import React,{useState, useEffect} from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession, signIn, signOut } from "next-auth/react"
import {useRouter} from "next/navigation"


const Dashboard = () => {
  // const [data,setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)


  //fetching data using useEffect
  // useEffect(() => {
  //   async function getData(){
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
  //       // next: { revalidate: 10}, for fetching new dat aevery 10sec
  //       cache: "no-store",  //for fetching new data on every request 
  //     })
    
  //     if(!res.ok){
  //       setErr(true)
  //     }
      
  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  const session = useSession()
  console.log(session)

  const router = useRouter()

    //fetching data using SWR 
  //take account of isLoading, error and also we can mutate our data 
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  if(session.status === "loading"){
    return <p>Loading...</p>
  }
  if(session.status === "unauthenticated"){
    router?.push("/dashboard/login")
  }

  // console.log(data)
  // console.log(isLoading)
  if(session.status === "authenticated"){
    return (
      <div className={styles.container}>Dashboard</div>
    )
  }
  
}

export default Dashboard