import React from 'react'
import style from "../app/css/loading.module.css"
export default function Loading() {
  return (
    /* From Uiverse.io by satyamchaudharydev */ 
  <div className={style.loadingbar}>
<div className={style.loading}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
  </div>  
  )
}
