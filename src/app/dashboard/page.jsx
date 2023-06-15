"use client"
import React,{useState, useEffect} from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession, signIn, signOut } from "next-auth/react"


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
  //fetching data using SWR 
  //take account of isLoading, error and also we can mutate our data 
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  // console.log(data)
  // console.log(isLoading)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard