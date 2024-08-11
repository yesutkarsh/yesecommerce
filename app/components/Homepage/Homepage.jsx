import React from "react";
import style from "../../css/section.module.css";
import footerStyle from "../../css/footer.module.css"
import pic1 from "../../../public/assets/1.png";
import pic2 from "../../../public/assets/2.jpg";
import pic3 from "../../../public/assets/3.png";
import Link from "next/link";
import Image from "next/image";
export default function Homepage() {
  return (
    <>
      <div id={style.section1}>
        <h1 id={style.coll}>COLLECTION</h1>
        <div id={style.cards}>
          {/* <!-- Card 1 --> */}
          <div
            style={{ backgroundColor: "#3EB489", color: "white" }}
            id={style.card}
          >
            <div id={style.navCooll}>
              <Link href="/pages/browse">
                <span>MEN</span>
                <i class="ri-arrow-right-up-line"></i>
              </Link>
            </div>
            <p style={{ textAlign: "right" }}>
              SHIRT | PANT | UPPER | LOWER | JEANS | TSHIRT |
            </p>
          </div>
          {/* <!-- Card 2 --> */}
          <div
            style={{ backgroundColor: "#EAD1DC", color: "rgb(46, 46, 46)" }}
            id={style.card}
          >
            <div id={style.navCooll}>
              <a
                style={{ color: "rgb(37, 37, 37)" }}
                href="http://localhost:5500/routes/women.html"
              >
                <span>WOMEN</span>
                <i class="ri-arrow-right-up-line"></i>
              </a>
            </div>
            <p style={{ textAlign: "right" }}>
              SHIRT | PANT | UPPER | LOWER | JEANS | TSHIRT |
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div
            style={{ backgroundColor: "#880010", color: "white" }}
            id={style.card}
          >
            <div id={style.navCooll}>
              <span>KIDS</span>
              <i class="ri-arrow-right-up-line"></i>
            </div>
            <p style={{ textAlign: "right" }}>
              SHIRT | PANT | UPPER | LOWER | JEANS | TSHIRT |
            </p>
          </div>
        </div>
      </div>

      <div id={style.sectrion2}>
        <h1 id={style.coll}>Trends</h1>
        <div id={style.sec2Card}>
          <div id={style.options}>
            <h1>Hot Pics</h1>
            <p>Browse Latest Hot pics for next party season</p>
          </div>

          <div id={style.options}>
            <h1>Classey Pics</h1>
            <p>Browse Latest Classey pics for next party season</p>
          </div>

          <div id={style.options}>
            <h1>Rare Pics</h1>
            <p>Browse Latest Rare pics for next party season</p>
          </div>

          <div id={style.options}>
            <h1>Hot Pics</h1>
            <p>Browse Latest Hot pics for next party season</p>
          </div>
        </div>

      </div>
      <div id={style.section3}>
        <Image src={pic1}/>
        <Image src={pic2}/>
        <Image src={pic3}/>
      </div>


<footer className={footerStyle.footer}>
<div id={footerStyle.sec1}>
            <h1>HEAVENLY</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci officia corrupti ipsum quia, dignissimos quaerat</p>
          <div id={footerStyle.social}>
            <i class="ri-facebook-circle-fill"></i>
            <i class="ri-instagram-fill"></i>
            <i class="ri-twitter-x-fill"></i>
          </div>
        </div>

        <div id={footerStyle.sec2}>
          <label>NAVAGATION</label> 
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>MEN</li>
        </div>
        <div id={footerStyle.sec2}>
          <label>ABOUT</label> 
          <li>NEWS</li>
          <li>FAQ</li>
          <li>ABOUT</li>
        </div>




</footer>

      
    </>
  );
}
