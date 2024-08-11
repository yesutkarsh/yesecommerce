"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/globalComponents/Navbar";
import { Provider } from "react-redux";
import store from "@/utils/store";
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (

    <Provider store={store}>

    <html lang="en">


      <body className={inter.className}>

<link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
      rel="stylesheet"
      />
        <NextTopLoader 
        color="#313f2c"
        height={7}
        />
      <Navbar/>

        {children}
        </body>
    </html>
      </Provider>
  );
}
