"use client"
import { useDispatch } from "react-redux";
import style from "./style.module.css"
import { toggleCart } from "@/utils/slices/toggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function User(props) {

    const dispatch = useDispatch()



  return (
    <>
    <div className={style.container}>
        <div className={style.wrapper}>

        <div className={style.Name}>{props.name}</div>

        <div className={style.info}>
        <div className={style.Email}>{props.email}</div>
        <div className="flex gap-4">
        <div className={style.Provider}>
        <i class="ri-bard-fill"></i>
            <span>Google</span>
            </div>
            <div className={style.logout}>
            <i class="ri-logout-box-line"></i>
            <LogoutLink>Log Out</LogoutLink>
            </div>
        </div>

        </div>
        
        <div className={style.Options}>
            <button>Orders</button>
            <button onClick={()=>{dispatch(toggleCart())}}>Cart</button>

        </div>
        </div>
    </div>
    </>
  )
}
