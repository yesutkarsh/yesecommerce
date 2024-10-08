import React from 'react'
import style from "../app/css/productcard.module.css"
import { motion } from 'framer-motion'
export default function Productcard({title, price, productId}) {
  return (
    <>
    <div key={productId} className={style.products}>
     <motion.div 
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
     className={style.product}> 
     <div className={style.dark}>
      <div>
        VIEW
     <i class="ri-arrow-right-up-line"></i>
      </div>
     </div>
    <div className={style.img}><img loading='lazy' src="https://image-cdn.hypb.st/https%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F25%2Fa8%2Ftshirt-4-2-fe8d2.jpg?fit=max&w=460&q=60" alt="" /></div>
    <div className={style.info}>
        <div>
        <span className={style.title}>{title}</span> <br />
        <span className={style.color}>7 Colors</span>
        </div>
        <div>
        <span className={style.price}>₹{price}</span> <br />
        <span className={style.color}> <s>₹{Number(price)+200}</s></span>

        </div>
        </div>   
    </motion.div>

    </div>
    </>
  )
}
