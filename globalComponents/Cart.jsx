"use client"
import React, { useEffect, useState } from 'react'
import style from "../app/css/cart.module.css"
import { toggleCart } from '@/utils/slices/toggle'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { addToCart, removeFromCart } from '@/utils/slices/cart'
import { motion, AnimatePresence } from 'framer-motion'

export const CartProductCard = (props)=>{
    const dispatch = useDispatch()
    
   
    return(
        <>
        <AnimatePresence>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={style.cartCard}>
            <span>{props.name || "Red Worf tshirt Men"}</span>
            <span> ₹ {props.price || "399"}</span>
            <div className='flex'>
            <button style={{color:"green", marginRight:"10px"}}>Quantity 1</button>
            <button onClick={()=>{
                dispatch(removeFromCart(props.id))
            }} style={{color:"red", marginRight:"10px"}}>Remove</button>

            </div>
        </motion.div>
            </AnimatePresence>
        </>
    )
}


export default function Cart() {





    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState(true);


    const toggleCarts = ()=>{
        setIsVisible(!isVisible)
        setTimeout(() => {
            dispatch(toggleCart());
          }, 500); // Match this with your exit animation duration
      }
  
// Getiing Tatal Price
    const totalPrice = useSelector((store)=>{
        return store?.cart?.totalPrice
    })


    
// Getting Lost Of Products from redux
    const products = useSelector((store)=>{
        return store?.cart?.cart
    })
  

    if(products.length==0){
        let item = localStorage.getItem("cart")
        item = JSON.parse(item)
        if(item){
            item.map((item)=>{
                dispatch(addToCart({id:item.id, name:item.name, price: item.price}))
            })
        }
    }



  return (
    <>
    <AnimatePresence>
{isVisible && (

    <motion.div
    
    initial={{ opacity: 0, marginRight:"-100px" }}
      animate={{ opacity: 1, marginRight:"0px" }}
      exit={{ opacity: 0, marginRight:"-100px" }}
      transition={{ duration: 0.5 }}

    className={style.container}>
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


                {products?.map((prod)=>{
                    return <CartProductCard id={prod?.id} name={prod?.name} price={prod?.price}/>
                })}

                
            </div>
            
            </>
           
            }
        </div>

        <div className={style.checkout}>
            <span>Total : ₹ {totalPrice} </span>
            <Link href={"/pages/order"}>
            <button onClick={toggleCarts}>Checkout</button>
            </Link>
        </div>

    </motion.div>
)}

    </AnimatePresence>

    </>
  )
}
