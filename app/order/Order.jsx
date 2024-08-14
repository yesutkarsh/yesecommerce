"use client"
import React, { useState } from 'react'
import style from "./style.module.css"
import { useSelector } from 'react-redux'
import { CartProductCard } from '@/globalComponents/Cart';
export default function Order() {



  const products = useSelector((store) => store?.cart?.cart || []);
  const price = useSelector((store) => store?.cart?.totalPrice || 0);

  console.log(products,price)
  return (
    <>
    <div className={style.order}>

    <div className={style.products}>
      {products.length === 0 ? 
        "No Product to Checkout" :
        <div className='w-full gap-5'>
          {products.map((prod) => (
            <CartProductCard key={prod.id} name={prod.name} price={prod.price} />
          ))}
          <hr />
      <h1> Total : {price}</h1>
      <h1> Delivery  : 99 </h1>
      <h1> Total Pice  : {price+99} </h1>


        </div>
      }
    </div>




    {/* form */}
    {products.length !==0?
  
<div className={style.form}>
  <form action="/">
 
  <h1>Whome And Where to Deliver</h1>
  <input type="text" placeholder='First Name' name="" id="" />
  <input type="text" placeholder='Last Name' name="" id="" />
  <input type="number" placeholder='Phone Number' name="" id="" />
  <textarea placeholder='Address' name="" id=""></textarea>
  <input type="text" placeholder='Land Mark ( If Any ) ' name="" id="" />
<button>Order</button>
  </form>
</div>

: null}



      </div>
</>
  )
}
