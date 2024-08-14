"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Card from '../components/card'
import Loading from '@/utils/Loading'
export default function Id() {
  const params = useParams()
  const {id} = params



  const [data, setData] = useState([])

  const fetching = async()=>{
    const data = await fetch(`https://yescommercedummy.vercel.app/search/id/${id}`)
    const json = await data.json()
    setData(json)
  }
  useEffect(()=>{
    fetching()
  },[])

  return (
    <>
    {data.length!==0? 
        <Card id={data[0].productId} key={data[0].productId} price={data[0].price} title={data[0].name} description={data[0].description}/>
    
    :<Loading/>}


    </>
  )
}
