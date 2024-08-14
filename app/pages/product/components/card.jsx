"use client"
import React, { useState } from 'react'
import style from "./card.module.css"
import { addToCart } from '@/utils/slices/cart'
import { useDispatch } from 'react-redux'
import Notification from '@/globalComponents/microComponents/Notification'

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

const handleNotification = ()=>{
 }



  return (
    <>
    <div key={props.productId} className={style.wrapper}>

    <div className={style.section1}>
        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/7/s-oversized-beige-ironflex-original-imagkjashnhxktjg.jpeg?q=90&crop=false" alt="product Image" />
    </div>
    <div className={style.section2}>
        <div className={style.name}>{props.title || "Tshirt Grey for Men"}</div>
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
