"use client";
import React from "react";
import style from "./style.module.css";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
export default function Signup() {
  return (
    <>
      <div className={style.heading}>
        Hey, it looks like you either{" "}
        <span style={{ fontWeight: "600" }}>don't have an account </span> or
        you're <span style={{ fontWeight: "600" }}>logged out </span>. Please
        use the button below to continue to your account.
      </div>
        <LoginLink className={style.button}>
          <div>
            <i class="ri-user-3-fill"></i> Continue to Account{" "}
          </div>
          <div className="flex gap-4">
            <i class="ri-google-fill"></i>
            <i class="ri-apple-fill"></i>
            <i class="ri-arrow-right-line"></i>
          </div>
        </LoginLink>
    </>
  );
}
