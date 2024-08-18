import React from 'react'
import style from "./style.module.css"
import Link from 'next/link'
export default function Failed() {
  return (
    <div className={style.failed}>
        <span>
        Failed To Fetch Data from Server.
        <Link href={"/admin"}>
        <button>Close</button>
        </Link>
        </span>
    </div>
  )
}
