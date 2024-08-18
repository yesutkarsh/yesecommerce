'use client';

import { useDispatch } from 'react-redux';
import style from './style.module.css';
import { toggleCart } from '@/utils/slices/toggle';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import ShimmerText from '@/globalComponents/ShimmerText';
import Link from 'next/link';
export default function User(props) {
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.Name}>
          {props.name || <ShimmerText height="40px" />}
        </div>

        <div className={style.info}>
          <div className={style.Email}>
            {props.email || (
              <span className="opacity-[0.5]">example@gmail.com</span>
            )}
          </div>
          <div className="flex gap-4">
            <div className={style.Provider}>
              <i className="ri-bard-fill"></i>
              <span>Google</span>
            </div>
            <div className={style.logout}>
              <i className="ri-logout-box-line"></i>
              <LogoutLink>Log Out</LogoutLink>
            </div>
          </div>
        </div>

        <div className={style.Options}>
          <Link href={"/pages/order/myorders"}>
          <button className={style.button}>Orders</button>
          </Link>
          <Link href={"/pages/whoami"}>
          <button onClick={() => dispatch(toggleCart())}>Cart</button>
          </Link>
          <Link href={"/admin"}>
          <button>Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
