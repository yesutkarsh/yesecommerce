"use client"
import React, { useState } from 'react'
import style from "./style.module.css"
export default function OrderCard({title, price, orderDate, products}){


  const [viewAll, setViewAll] = useState(false)
  const viewAllProduct = ()=>{
    setViewAll(!viewAll)
  }
  return (
    <div className={style.container}>
    <div className={style.product}>
      <div className={style.info}>
        <span>{title} {products.length>0?
          <>
          <i class="ri-stack-fill"></i>{products.length}
          </>
          
          :""}</span>
        <span>Total ₹{price}</span>
        <span>Ordered On {orderDate}</span>
      </div>
      <span onClick={viewAllProduct}>
        View All Product 
        {viewAll?<i class="ri-arrow-down-s-line"></i>:
        <i class="ri-arrow-right-s-line"></i>
        }
      </span>
      <span>
        
        { viewAll &&products?.map((product)=>{
          return <> <span className={style.allprod} id={product.id}> {product?.name}   ₹{product?.price} </span> </>
        })}
      </span>
    </div>
    <div className={style.status}>
      <span> Status:  Pending </span>
    </div>
  </div>
  )
}
