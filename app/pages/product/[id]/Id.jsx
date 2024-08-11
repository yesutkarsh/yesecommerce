"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Card from '../components/card'
import Loading from '@/utils/Loading'
export default function Id() {
  const params = useParams()
  const {id} = params


  // Animation
  const [loadingbar,setloadingbar] = useState(true)
  const off = ()=>{
      setloadingbar(false)
  }
  
  
  // Animation

  const [data, setData] = useState([])

  const fetching = async()=>{
    const data = await fetch(`https://yescommercedummy.vercel.app/search/id/${id}`)
    const json = await data.json()
    setData(json)
  }
  useEffect(()=>{
    fetching()
  off()

  },[])
  return (
    <>
     {loadingbar?<Loading/>:""}
    {data.length!==0? 

      data.map((prod)=>{
        return <Card key={prod.productId} title={prod.name} description={prod.description}/>
      })
    
    :"Sorry, but we couldn't find the product you're looking for."}


    </>
  )
}
