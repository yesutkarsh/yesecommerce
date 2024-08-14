"use client"
import React, { useEffect, useState } from 'react'
import Id from './Id'
import Loading from '@/utils/Loading'

export default function page() {
  // Animation
  const [loadingbar,setloadingbar] = useState(true)
  const off = ()=>{
      setloadingbar(false)
  }
  
  useEffect(()=>{
    setloadingbar(false)
  },[])
  // Animation

  return (
  <>
  <div className='mb-8'>

    <Id/>
    {loadingbar?<Loading/>:""}
  </div>
  </>
  )
}
