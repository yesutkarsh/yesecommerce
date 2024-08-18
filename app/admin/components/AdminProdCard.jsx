import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import Animation from './Animation'
import Failed from './Failed'

function AdminProdCard ({orderId, email, status, products, date, time, price}) {
    const [allProduct, showAllProduct] = useState(false)
    const [orStatus, setOrstatus] = useState("pending")
    const [anim, setAnim] = useState(false)
    const [failed, setFailed] = useState(false)

    const toggleAllProduct = ()=>{
        showAllProduct(!allProduct)
    }

    // Find and Update 
    async function Update() {
        console.log(orStatus)
        console.log(orderId)
        setAnim(true)

        try {
            const request = await fetch(`https://yescommercedummy.vercel.app/mongo/update`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    status: orStatus,
                    orderid: orderId
                },
            });
            if (request.ok) {
                console.log("done")
                setAnim(false)
            } else {
                setFailed(true)
            }
        } catch (error) {
            console.log(error)
        }
    } 

    return (
        <>
            {anim ? <Animation /> : ""}
            {failed ? <Failed /> : ""}

            <div className={style.prod}>
                <div className='flex gap-4 flex-wrap'>
                    <span>OrderId: {orderId}</span>
                    <span>Email: {email}</span>
                    <span>Date: {date}</span>
                    <span>Time: {time}</span>
                    <span>Total Price: {price}</span>

                    <form onSubmit={(e) => e.preventDefault()} action="">
                        <select onChange={(e) => setOrstatus(e.target.value)} required>
                            <option value="Pending">Status: {status}</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                        {status !== "Pending" ? "" :
                            <button onClick={Update} type='submit'>Update</button>
                        }
                    </form>
                </div>

                <br />
                <span onClick={toggleAllProduct}>View All Products <i className="ri-arrow-right-s-line"></i></span>
                <div className={style.prductsList}>
                    {allProduct && products.map((product) => (
                        <span key={product.id}>Name: {product.name}, Price: {product.price}, Product Id: {product.id}</span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminProdCard
