"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import style from "../app/css/productDetails.module.css"
import { toggleProdDetailCardOff } from '@/utils/slices/toggle'
export default function ProductDetail() {
  const dispatch = useDispatch()

  return (
    <>
    <div className={style.container}>
<div>kjn</div>
<div onClick={()=>{
  dispatch(toggleProdDetailCardOff())
}}>Close</div>
      </div>
    </>
  )
}
