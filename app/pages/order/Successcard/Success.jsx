import React from 'react'
import style from "./style.module.css"
import Link from 'next/link'
export function Failure(){
    return (
        <>
        <div className={style.wrapper}>
        <div className={style.success}>We are facing issue while placing order.
    <br />
    <Link href={"/"}>
        <button>Re-Order <i class="ri-arrow-right-line"></i> </button>
    </Link>
        </div>
        </div>
        </>
      )
}

export default function Success() {
  return (
    <>
    <div className={style.wrapper}>
    <div className={style.success}>Your order has been placed successfully! We are preparing it for shipment and will notify you with tracking information once it is on its way.
<br />
<Link href={"/pages/order/myorders"}>
    <button>Close <i class="ri-arrow-right-line"></i> </button>
</Link>
    </div>
    </div>
    </>
  )
}



export function AnimLoadin(){
    return(
        <>
        
<div className={style.loading}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
        </>
    )
}