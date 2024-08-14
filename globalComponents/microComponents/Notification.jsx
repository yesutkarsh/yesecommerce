import React from 'react'
import style from "./style.module.css"
export default function Notification() {
  return (
    <div className={style.notification}>
        <i class="ri-check-double-line"></i>
        Product Added To Cart
    </div>
  )
}
