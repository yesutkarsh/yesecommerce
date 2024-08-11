"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Card from '../components/card'
export default function page() {
  const params = useParams()
  const {id} = params


  const [data, setData] = useState([])

  const fetching = async()=>{
    const data = await fetch(`https://yescommercedummy.vercel.app/search/id/${id}`)
    const json = await data.json()
    setData(json)
  }
  useEffect(()=>{fetching()},[])
  return (
    <>
    {data.length!==0? 

      data.map((prod)=>{
        return <Card title={prod.name} description={prod.description}/>
      })
    
    :"Sorry, but we couldn't find the product you're looking for."}


    </>
  )
}
