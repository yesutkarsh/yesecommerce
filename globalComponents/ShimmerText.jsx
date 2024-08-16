import React from 'react'
import style from "../app/css/shimmer.module.css"
export default function ShimmerText(props) {
  return (
    <div className={style.shimmerwrapper}>
        <h1 style={{height:props.height}} className={style.shimmer}>Loading Header</h1>
    </div>
  )
}
