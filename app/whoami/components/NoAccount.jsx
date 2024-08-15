import React from "react";
import style from "./NoAccount.module.css";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
export default function NoAccount() {
  return (
    <div className={style.container}>
      <h1>
        Hey, it looks like you either don't have an account or you're logged
        out. Please use the button below to continue to your account.
      </h1>
      <br />
      <hr />
      <br />
      <LoginLink>
        <div className={style.continue}>
          <i class="ri-user-3-fill"></i>
          Continue to Account
          <i class="ri-apple-fill"></i>
          <i class="ri-google-fill"></i>
          <i class="ri-microsoft-fill"></i>
          <i class="ri-arrow-right-line"></i>
        </div>
      </LoginLink>
    </div>
  );
}
