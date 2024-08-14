"use client"
import React, { useState } from 'react'
import style from "../app/css/cart.module.css"
import { toggleCart } from '@/utils/slices/toggle'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'


export const CartProductCard = (props)=>{
  

    return(
        <>
        <div className={style.cartCard}>
            <span>{props.name || "Red Worf tshirt Men"}</span>
            <span> ₹ {props.price || "399"}</span>
            <button>Quantity 1</button>
        </div>
        </>
    )
}


export default function Cart() {


    const totalPrice = useSelector((store)=>{
        return store?.cart?.totalPrice
    })

    const dispatch = useDispatch()

    const toggleCarts = ()=>{
      dispatch(toggleCart())
    }


    const products = useSelector((store)=>{
        return store?.cart?.cart
    })
  
    console.log()
  return (
    <>
    <div className={style.container}>
        <div className={style.nav}>
            <span> Cart </span>
            <i onClick={toggleCarts} class="ri-close-large-line"></i>
        </div>
        <div className={style.products}>
            {products.length == 0? 
            <>
            Your cart is feeling a little light!
            <br />
            Nothing here... yet!
            </>
            
            :
            <>
            
            <div className='w-full gap-5'>
                {products.map((prod)=>{
                    return <CartProductCard name={prod.name} price={prod.price}/>
                })}
            </div>
            
            </>
           
            }
        </div>

        <div className={style.checkout}>
            <span>Total : ₹ {totalPrice} </span>
            <Link href={"/order"}>
            <button onClick={toggleCarts}>Checkout</button>
            </Link>
        </div>

    </div>
    </>
  )
}
