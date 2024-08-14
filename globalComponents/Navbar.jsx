import React from 'react'
import style from "../app/css/nav.module.css"
import Link from 'next/link'
import Cart from "@/globalComponents/Cart";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '@/utils/slices/toggle';
export default function Navbar() {


  const cart = useSelector((store)=>{
    return store?.toggleAnimation?.cart
  })
  console.log(cart)


  const dispatch = useDispatch()

  const toggleCarts = ()=>{
    dispatch(toggleCart())
  }

  
  return (
<>



{cart?<Cart/>:""}


<nav className={style.nav}>
      <div id={style.leftNav}>
        <Link href={"http://localhost:3000/pages/browse/women"}>
        <li>WOMEN</li>
        </Link>
        <Link href={"http://localhost:3000/pages/browse/men"}>
        <li>MEN</li>
        </Link>
        <Link href={"http://localhost:3000/pages/browse/a"}>
        <li>ALL</li>
        </Link>
      </div>
      <Link href={"/"}>
      <div id={style.centerNav}
      >HEAVENLY</div>
      </Link>
      <div id={style.rightNav}>
        <a style={{color:"black"}} href="./routes/account.html">
        <i class="ri-user-smile-fill"></i>
        </a>
        <div onClick={toggleCarts} className='cursor-pointer'>
        <i class="ri-shopping-cart-2-fill"></i>
        </div>
      </div>
    </nav>
    <div id={style.navLabel}>
      HEAVENLY
      <i class="ri-arrow-right-line"></i>
       HOME
    </div>



    <div className={style.bottomNav}>
      <Link href={"/"}>
    <i class="ri-home-2-fill"></i>
      </Link>
      <Link href={"/pages/browse/a"}>
    <i class="ri-search-fill"></i>
      </Link>
      <Link href={"/whoami"}>
    <i class="ri-user-smile-fill"></i>
      </Link>
    <div onClick={toggleCarts} className='cursor-pointer'>
    <i class="ri-shopping-cart-2-fill"></i>
    </div>

    </div>

</>
  )
}
