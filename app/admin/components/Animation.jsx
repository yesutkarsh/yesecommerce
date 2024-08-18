import React from 'react'
import style from "./style.module.css"
export default function Animation() {
  return (
<div className={style.anim}>
<div className={style.loader}>
    <span className={style.bar}></span>
    <span className={style.bar}></span>
    <span className={style.bar}></span>
</div>
</div>
  )
}
