"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { CartProductCard } from "@/globalComponents/Cart";
import { v4 as uuidv4 } from 'uuid';
import Success, { AnimLoadin, Failure } from "./Successcard/Success";


export default function Order() {
  const [viewProducts, setViewProducts] = useState(false);
  
  const toogleProduct = () => {
    setViewProducts(!viewProducts);
  };


   // Loading Anim
   const [anim, setAnim] = useState(false);

  // Once order done
  const [success, setSucceess] = useState(false);
  const [failure, setFailure] = useState(false);


  const products = useSelector((store) => store?.cart?.cart || []);
  const price = useSelector((store) => store?.cart?.totalPrice || 0);

  // Getting User Account Details to Save in database
  const [user, setUser] = useState(null);
  const fetchData = async () => {
    
    try {
      let data = await fetch("/api/user");
      let json = await data.json();
      if (data) {
        setUser(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Getting User Information to Delievr the Product
  let fname = useRef();
  let lname = useRef();
  let phone = useRef();
  let address = useRef();
  let landmark = useRef();
  let country = useRef();
  let pincode = useRef();

  // Getting Date And Time Of Order
  const date = new Date();
  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
// Get day, month, and year
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

// / Get hours, minutes, and seconds
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

const orderDate = `${day}, ${month}, ${year}`
const orderTime = `${hours}:${minutes}:${seconds}`

const orderid = uuidv4(6);


  // Placing Order
  const placeOrder = async (e) => {

  
    setAnim(true)

    e.preventDefault();
    let data = {
      orderid:orderid,
      email:user.email,
      name: fname.current.value + lname.current.value,
      phoneNumber: phone.current.value,
      address: address.current.value,
      country: country.current.value,
      pincode: pincode.current.value,
      products: products,
      totalPrice: price,
      User_Account: user,
      Date_Of_Order:orderDate,
      Time_Of_Order:orderTime,
      status:"Pending"
    };
    console.log(data);
    data = JSON.stringify(data);
    try {
      const response = await fetch(process.env.HOST+"/mongo/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          data: data,
        },
      });
      if (response.ok) {
        setSucceess(true)
        setAnim(false)
        console.log("done");
      }
      if(!response.ok){
        setFailure(true)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={style.order}>
        <div className={style.products}>
          {products.length === 0 ? (
            <>
              <span className="text-white flex justify-center ">
                No Products To Checkout
              </span>
            </>
          ) : (
            <div className="w-full gap-5">
              <span onClick={toogleProduct} className="m-[10px]">
                View Products
                {viewProducts ? (
                  <i class="ri-arrow-down-s-line"></i>
                ) : (
                  <i class="ri-arrow-right-s-line"></i>
                )}
              </span>

              {viewProducts ? (
                <div className="mt-5">
                  {products.map((prod) => (
                    <CartProductCard
                      key={prod?.id}
                      name={prod?.name}
                      price={prod?.price}
                    />
                  ))}
                </div>
              ) : null}

              <br />
              <br />
              <hr />
              <br />
              <div className={style.specs}>
                <h1> Total : {price}</h1>
                <h1> Delivery : 99 </h1>
                <h1> Total Pice : {price + 99} </h1>
              </div>
            </div>
          )}
        </div>

        {/* form */}
        {products.length !== 0 ? (
          <div className={style.form}>
            <form
              action="/"
              method="POST"
              onSubmit={(e) => {
                placeOrder(e);
              }}
            >
              <input
                ref={fname}
                type="text"
                placeholder="First Name"
                required
              />
              <input ref={lname} type="text" placeholder="Last Name" required />
              <input
                ref={phone}
                type="number"
                placeholder="Phone Number"
                required
              />
              <textarea ref={address} placeholder="Address" required></textarea>
              <input
                ref={landmark}
                type="text"
                placeholder="Land Mark ( If Any ) "
              />
              <div className={style.select}>
                Country
                <select ref={country} required>
                  <option value="India">India</option>
                  <option value="US">United States</option>
                </select>
              </div>
              <input
                ref={pincode}
                type="number"
                placeholder="Area/Pin Code"
                name=""
                id=""
                required
              />

              <br />
              <button className={style.butt} type="submit"> {anim? <AnimLoadin/>:"Order"}</button>
            </form>
          </div>
        ) : null}
      </div>

{success? <Success/>:""}
{failure? <Failure/>:""}

    </>
  );
}
