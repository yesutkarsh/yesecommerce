"use client"
import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import Animation from './Animation'
import Failed from './Failed'
import AdminProdCard from './AdminProdCard'

export default function Admin() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState()

    const [anim, setAnim] = useState(false)
    const [failed, setFailed] = useState(false)

    // Today Order
    async function Today() {
        setAnim(true)
        // Getting Date And Time Of Order
        const date = new Date();
        // Array of month names
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December",
        ];
        // Get day, month, and year
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const orderDate = `${day}, ${month}, ${year}`

        try {
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/getSpecific`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    key: orderDate,
                    parameter: "date"
                },
            });
            let json = await request.json()
            if (request.ok) {
                setAnim(false)
                setData(json)
            } else {
                setFailed(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Pending Order
    async function Pending() {
        setAnim(true)
        try {
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/getSpecific`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    key: "Pending",
                    parameter: "status"
                },
            });
            let json = await request.json()
            if (request.ok) {
                setAnim(false)
                console.log(json)
                setData(json)
            } else {
                setFailed(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Delivered Order
    async function Delivered() {
        setAnim(true)
        try {
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/getSpecific`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    key: "Delivered",
                    parameter: "status"
                },
            });
            let json = await request.json()
            if (request.ok) {
                setData(json)
                setAnim(false)
            } else {
                setFailed(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Search via Order Id
    async function searchs(e) {
        setAnim(true)
        e.preventDefault()
        try {
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/getSpecific`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    key: search,
                    parameter: "search"
                },
            });
            let json = await request.json()
            if (request.ok) {
                setData(json)
                setAnim(false)
            } else {
                setFailed(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Today()
    }, [])

    return (
        <>
            {anim ? <Animation /> : ""}
            {failed ? <Failed /> : ""}

            <div className={style.nav}>
                <span onClick={() => Today()}><i className="ri-calendar-fill"></i>Today</span>
                <span onClick={() => Pending()}><i className="ri-time-fill"></i>Pending</span>
                <span onClick={() => Delivered()}><i className="ri-check-double-line"></i>Done</span>
            </div>
            <div className={style.search}>
                <form action="">
                    <input onChange={(e) => setSearch(e.target.value)} placeholder='Order Id' type="search" />
                    <button onClick={(e) => searchs(e)}>Search</button>
                </form>
            </div>
            {data.length !== 0 ?
                data.map((product) => (
                    <AdminProdCard
                        key={product?.orderid}
                        orderId={product?.orderid}
                        email={product?.email}
                        status={product?.status}
                        products={product?.products}
                        date={product?.Date_Of_Order}
                        time={product?.Time_Of_Order}
                        price={product?.totalPrice}
                    />
                ))
                : ""}
        </>
    )
}
