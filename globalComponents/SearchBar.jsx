import React from 'react';
import { motion } from 'framer-motion';
import style from "../app/css/searchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <motion.div 
        className={style.searchContainer}
        initial={{opacity: 0, bottom:0}}  // Starts below the view with opacity 0
        animate={{opacity: 1, bottom:34}}    // Moves to original position with full opacity
        transition={{ duration: 0.5,  }}    // Animation duration
      >
        <form className={style.searchForm}>
          <input 
            type="text" 
            placeholder="Search for products..." 
            name="q" 
            value="" 
            className={style.searchInput}
          />
          <input type="hidden" name="type" value="product,page" />
          <input type="hidden" name="options[unavailable_products]" value="hide" />
          <input type="hidden" name="options[prefix]" value="last" />
          <button type="submit" className={style.searchButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
      </motion.div>
    </>
  )
}
