import React from "react";
import style from "../../app/css/CategoryCard/categoryCard.module.css";
export default function CategoryCard({title}) {
  let Card = () => {
    return (
      <>
        <div className={style.Card}>
          <img
            src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-brown-the-awakening-hour-graphic-printed-oversized-hoodies-652435-1729836715-1.jpg&w=1080&q=75"
            alt=""
          />
          <span className={style.Title}>Hoodie</span>
          <p> Mens's Brown Hoddie</p>
          <span>$129</span>
        </div>
      </>
    );
  };

  return (
    <>
    <div className={style.wrapper}>
    <div className={style.categoryTitle}>{title}</div>
    <div className={style.categoryCard}>
      <Card />
      <Card />
    </div>
    </div>
    </>
  );
}
