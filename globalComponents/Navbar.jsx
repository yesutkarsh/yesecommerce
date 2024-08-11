import React from 'react'
import style from "../app/css/nav.module.css"
import Link from 'next/link'
export default function Navbar() {
  return (
<>


<nav className={style.nav}>
      <div id={style.leftNav}>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
      </div>
      <Link href={"/"}>
      <div id={style.centerNav}
      >HEAVENLY</div>
      </Link>
      <div id={style.rightNav}>
        <div className='bg-black text-white'>
        <i class="ri-search-line"></i>
EXPLORE
        </div>
        <a style={{color:"black"}} href="./routes/account.html">
          <i class="ri-account-circle-line"></i>
        </a>
        <i class="ri-heart-line"></i>
        <i class="ri-shopping-cart-line"></i>
      </div>
    </nav>
    <div id={style.navLabel}>
      HEAVENLY
      <i class="ri-arrow-right-line"></i>
       HOME
    </div>

</>
  )
}
