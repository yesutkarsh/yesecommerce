"use client"
import { useEffect, useState, useRef } from "react";
import style from "./page.module.css";
import Productcard from "@/globalComponents/productcard";
import { Suspense } from "react";
import Link from "next/link";
import LazyLoadComponent from "@/LazyLoadComponent";
export default function Browse() {
  const [data, setData] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("women");
  const [sortDirection, setSortDirection] = useState("asc"); // added state variable




  const fetching = async () => {
    try {
      let res = await fetch(
        "https://yescommercedummy.vercel.app/search/" + query
      );
      res = await res.json();
      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  const handleSort = (direction) => {
    setSortDirection(direction);
  };

  const sortedProducts = data
    ? data[0].sort((a, b) => {
        if (sortDirection === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      })
    : [];

  return (
    <>



    <div className={style.search}>
<div>
<form action="/" onSubmit={(e) => e.preventDefault()}>
<input
onChange={(e) => {
setQuery(e.target.value);
}}
placeholder="Search"
/>
<button type="submit" onClick={fetching}>
Search
</button>
</form>
</div>
</div>



      {/* ... */}
      <div className={style.filter}>
        <label>Filter</label>
        <span onClick={() => handleSort("desc")}>
          High To Low <i class="ri-arrow-up-line"></i>
        </span>
        <span onClick={() => handleSort("asc")}>
          Low To High <i class="ri-arrow-down-line"></i>
        </span>
      </div>
      {/* ... */}
      <div className="grid place-items-center h-full w-full">
        <div className="flex flex-wrap justify-center max-w-[1200px]">
          {sortedProducts.map((product) => {
            return (
                  <LazyLoadComponent>
                <div key={product.productId} className="flex">

                  <div key={product.productId}>
                    <Link key={product.productId} href={`/pages/product/${product.productId}`}>
                  <Productcard key={product.productId} title={product.name} price={product.price} />
                    </Link>
                  </div>
              </div>
                </LazyLoadComponent>
            );
          })}
        </div>
      </div>
    </>
  );
}