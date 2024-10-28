import React, { useState } from "react";
import style from "../app/css/nav.module.css";
export default function Slider() {
  let [ shop, setShope ] = useState(false);
  function showShop(){
    setShope(!shop)
  }
  return (
    <>
      <div className={style.slide}>
        <div className={style.auth}>LOG IN</div>

        <div className={style.slideNavs}>
          <li className={style.navs}>NEW ARRIVALS</li>
          <li className={style.navs}>BEST SELLING</li>
          <li className={style.navs}>
            <div onClick={showShop} className={style.navWithSubNav}>
              SHOP 
             {!shop?
              <i class="ri-arrow-drop-down-line"></i>
            :<i class="ri-arrow-drop-up-line"></i>}
              </div>
            {shop ? (
              <ul>
                <li className={style.subLi}>
                  <img src="https://cdn-icons-png.flaticon.com/512/7032/7032018.png" alt="" />
                 <span>MEN TOPWEAR</span>
                  </li>
                <li className={style.subLi}>
                  <img src="https://cdn-icons-png.flaticon.com/512/3531/3531748.png" alt="" />
                  MEN BOTTOMWEAR</li>
                <li className={style.subLi}>
                  <img src="https://cdn1.iconfinder.com/data/icons/clothing-9/625/clothing_2-512.png" alt="" />
                  WOMEN TOPWEAR</li>
                <li className={style.subLi}>
                  <img src="https://cdn-icons-png.flaticon.com/512/88/88773.png" alt="" />
                  WOMEN BOTTOMWEAR</li>
              </ul>
            ) : (
              ""
            )}
          </li>
          <li className={style.navs}>TRACK ORDER</li>
          <li className={style.navs}>RETURN OR EXCHANGE REQUEST</li>
          <li className={style.navs}>CUSTOMER SUPPORT</li>

        </div>
        <div className={style.social}>
          <div><i class="ri-instagram-fill"></i></div>
          <div><i class="ri-facebook-box-fill"></i></div>
          <div><i class="ri-youtube-fill"></i></div>
          <div><i class="ri-linkedin-box-fill"></i></div>
          <div><i class="ri-twitter-x-line"></i></div>
          <div><i class="ri-pinterest-fill"></i></div>
        </div>
      </div>
    </>
  );
}
