"use client"

import { useEffect, useState } from "react"
import User from "./components/User"

export default function WhoamI() {
  const [user, setUser] = useState(null)

  const fetchData = async ()=>{
    try{
      let data = await fetch('/api/user')
      let json = await data.json()
      if(data){
        setUser(json)
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
 {user?.error == "User not found" ? "Failed To Fetch You Account" : 
  (
    <User name={`${user?.given_name ?? ""} ${user?.family_name ?? ""}`} email={user?.email ?? ""} img={user?.picture ?? ""} />
  )
}
    </>
  )
}
