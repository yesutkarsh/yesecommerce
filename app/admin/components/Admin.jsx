"use client"
import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import Animation from './Animation'
import Failed from './Failed'

function AdminProdCard ({orderId, email,status,products,date, time, price, key}){
    const [allProduct, showAllProduct] = useState(false)
    const [orStatus, setOrstatus] = useState("pending")
    const [anim, setAnim] = useState(false)
    const [failed, setFailed] = useState(false)

    const toggleAllProduct = ()=>{
        showAllProduct(!allProduct)
    }


    // Find and Update 
    async function Update(){
        console.log(orStatus)
        console.log(orderId)
        setAnim(true)

        try{
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/update`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    status:orStatus,
                    orderid:orderId
                },
            });
            if(request.ok){
                console.log("done")
                setAnim(false)

            }if(!request.ok){
                setFailed(true)
            }
        }catch(error){
            console.log(error)
        }
    } 


return(<>
        {anim?<Animation/>:""}
        {failed?<Failed/>:""}

    <div key={key} className={style.prod}>
        <div className='flex gap-4 flex-wrap'>
        <span>OrderId: {orderId}</span>
        <span>Email: {email}</span>
        <span>Date: {date}</span>
        <span>Time: {time}</span>
        <span>Total Price: {price}</span>

        <form onSubmit={(e)=>e.preventDefault()} action="">
        <select onChange={(e)=>{
            setOrstatus(e.target.value)
            }} required>
            <option value="Pending">Status: {status}</option>
            <option value="Delivered">Delivered</option>
        </select>
        {status !== "Pending"?"":
        <button onClick={Update} type='submit'>Update</button>
        }
        </form>
        </div>


        <br />
        <span onClick={toggleAllProduct}>View All Products <i class="ri-arrow-right-s-line"></i></span>
        <div className={style.prductsList}>
            {allProduct && products.map((product)=>{
               return <span>Name: {product.name}, Price:{product.price}, Product Id: {product.id}</span>
            })}
        </div>
    </div>
</>)
}





export default function Admin() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState()

    const [anim, setAnim] = useState(false)
    const [failed, setFailed] = useState(false)



    // Today Order
    async function Today(){
        setAnim(true)
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
const orderDate = `${day}, ${month}, ${year}`

        try{
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/getSpecific`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    key:orderDate,
                    parameter:"date"
                },
            });
            let json  = await request.json()
            if(request.ok){
                setAnim(false)
                setData(json)
            }
            if(!request.ok){
                setFailed(true)
            }
        }catch(error){
            console.log(error)
        }
    }


    

    // Pending Order
    async function Pending(){
        setAnim(true)
        try{
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/getSpecific`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    key:"Pending",
                    parameter:"status"
                },
            });
            let json  = await request.json()
            if(request.ok){
                setAnim(false)
                console.log(json)
                setData(json)
            }if(!request.ok){
                setFailed(true)
            }
        }catch(error){
            console.log(error)
        }
    }



    
    // Delivered Order
    async function Delivered(){
        setAnim(true)
        try{
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/getSpecific`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    key:"Delivered",
                    parameter:"status"
                },
            });
            let json  = await request.json()
            if(request.ok){
                setData(json)
                setAnim(false)
            }if(!request.ok){
                setFailed(true)
            }
        }catch(error){
            console.log(error)
        }
    }

//  Search via Order Id
async function searchs(e){
    setAnim(true)
    e.preventDefault()
    try{
        const request = await fetch(`https://yescommercedummy.vercel.app/mongo/getSpecific`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                key:search,
                parameter:"search"
            },
        });
        let json  = await request.json()
        if(request.ok){
            setData(json)
            setAnim(false)
        }if(!request.ok){
            setFailed(true)
        }
    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    Today()
},[])

  return (
    <>
    {anim?<Animation/>:""}
    {failed?<Failed/>:""}

    <div className={style.nav}>
        <span onClick={()=>{
            Today()
        }}><i class="ri-calendar-fill"></i>Today</span>
        <span onClick={()=>{
            Pending()
        }}><i class="ri-time-fill"></i>Pending</span>
        <span onClick={()=>{
            Delivered()
        }}> <i class="ri-check-double-line"></i>Done</span>
    </div>
    <div className={style.search}>
        <form action="">
            <input onChange={(e)=>{
                setSearch(e.target.value)
            }} placeholder='Order Id' type="search"/>
            <button onClick={(e)=>{
                searchs(e)
            }}> Search </button>
        </form>
    </div>
    {data.length !==0?
    data.map((product)=>{
        return <AdminProdCard 
        key={product?.orderid}
        orderId={product?.orderid}
        email={product?.email}
        status={product?.status}
        products={product?.products}
        date={product?.Date_Of_Order}
        time={product?.Time_Of_Order}
        price={product?.totalPrice}
        
        />
    })
    :""}
     

    </>

  )
}
