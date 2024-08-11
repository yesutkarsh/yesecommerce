import React from 'react'
import style from "./card.module.css"
export default function Card(props) {
  return (
    <>
    <div className={style.wrapper}>

    <div className={style.section1}>
        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/7/s-oversized-beige-ironflex-original-imagkjashnhxktjg.jpeg?q=90&crop=false" alt="product Image" />
    </div>
    <div className={style.section2}>
        <div className={style.name}>{props.title || "Tshirt Grey for Men"}</div>
        <div className={style.description}>{props.description || "Tshirt Grey for Men"}</div>
        <button>Add to Cart
        <i class="ri-shopping-cart-line"></i>
        </button>
    </div>
        </div>
    </>
  )
}
