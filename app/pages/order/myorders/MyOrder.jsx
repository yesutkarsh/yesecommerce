"use client";
import React, { useEffect, useState } from "react";
import OrderCard from "./components/OrderCard";

export default function MyOrder() {
  // State to hold user data
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(""); // Added state for email
  const [orders, setOrders] = useState([])
  // Fetch user data and set the user state
  const fetchData = async () => {
    try {
      const response = await fetch("/api/user");
      if (response.ok) {
        const json = await response.json();
        setUser(json);
        setEmail(json.email); // Assuming user object has an email property
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fetch additional data using the user's email
  const getData = async () => {
    if (!email) return; // Prevent fetch if email is not available

    try {
      const request = await fetch("https://yescommercedummy.vercel.app/mongo/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          email: email, // Include email in headers
        },
      });

      if (request.ok) {
        const json = await request.json();
        console.log(json);
        setOrders(json)
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch user data and additional data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Run fetchData only on mount

  useEffect(() => {
    if (email) {
      getData(); // Fetch additional data if email is available
    }
  }, [email]); // Run getData whenever email changes

  return (
 <>
 {orders.length!==0?
 
 orders.map((order)=>{

     return <OrderCard key={Number(order.pincode)} title={order?.products[0]?.name} price={order?.totalPrice} orderDate={order?.Date_Of_Order} products={order?.products}/>
 })
 
 
 
 :"Loading Your Previous Orders"}
 </>
  );
}
