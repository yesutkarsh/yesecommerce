"use client"
import React, { useState } from 'react'
import style from "./style.module.css"
import { useSelector } from 'react-redux'
import { CartProductCard } from '@/globalComponents/Cart';
export default function Order() {



  const products = useSelector((store) => store?.cart?.cart || []);
  const price = useSelector((store) => store?.cart?.totalPrice || 0);

  // console.log(products,price)
  return (
    <>
    <div className={style.order}>

    <div className={style.products}>
      {products.length === 0 ? <>
      <span className='text-white flex justify-center '>No Products To Checkout</span>
      </>
        :
        <div className='w-full gap-5'>
          {products.map((prod) => (
            <CartProductCard key={prod?.id} name={prod?.name} price={prod?.price} />
          ))}
          <br />
          <hr />
          <br />
          <div className='text-white'>
      <h1> Total : {price}</h1>
      <h1> Delivery  : 99 </h1>
      <h1> Total Pice  : {price+99} </h1>
          </div>


        </div>
      }
    </div>




    {/* form */}
    {products.length !==0?
<div className={style.form}>
  <form action="/">
 
  <input type="text" placeholder='First Name' name="" id="" />
  <input type="text" placeholder='Last Name' name="" id="" />
  <input type="number" placeholder='Phone Number' name="" id="" />
  <textarea placeholder='Address' name="" id=""></textarea>
  <input type="text" placeholder='Land Mark ( If Any ) ' name="" id="" />
  <div className={style.select}>
    Country 
  <select>
    <option value="">India</option>
    <option value="">United States</option>
  </select>
  </div>
  <input type="number" placeholder='Area/Pin Code' name="" id="" />


  <br />
<button>Order</button>
  </form>
</div>

: null}



      </div>
</>
)
}
