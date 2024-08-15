"use client"
import React, { useEffect, useState } from 'react'
import style from "./card.module.css"
import { addToCart } from '@/utils/slices/cart'
import { useDispatch, useSelector } from 'react-redux'
import Notification from '@/globalComponents/microComponents/Notification'
import { motion } from 'framer-motion'

export default function Card(props) {



const dispatch = useDispatch()

const addtoCart = ()=>{
  dispatch(addToCart({id: props.id, name:props.title, price:props.price}))
  setShowCard(true);
  setTimeout(() => {
    setShowCard(false);
  }, 3000); // 3000 milliseconds = 3 seconds



}


const [showCard, setShowCard] = useState(false);







  return (
    <>
    <div key={props.productId} className={style.wrapper}>

    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      className={style.section1}>
        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/7/s-oversized-beige-ironflex-original-imagkjashnhxktjg.jpeg?q=90&crop=false" alt="product Image" />
    </motion.div>
    <div className={style.section2}>
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}  className={style.name}>{props.title || "Tshirt Grey for Men"}</motion.div>
        <div className={style.description}>{props.description || "Tshirt Grey for Men"}</div>
        <button onClick={addtoCart}>
          Add to Cart
        <div> ₹ {props.price}</div>
        <i class="ri-shopping-cart-line"></i>
        </button>
    </div>
        </div>
        {showCard?<Notification/>:""}
    </>


  )
}
