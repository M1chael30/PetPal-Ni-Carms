import React from "react";
import NavList from "./NavList";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
 return (
  <>
   <nav className="bg-white fixed right-0 top-0 left-0 z-50 border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <i className="fa-solid text-gray-100 bg-orange-500 text-xl bg-gray-200 px-2 rounded-xl text-center py-1 fa-paw"></i>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
       Pet Pal
      </span>
     </Link>
     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div className="relative mr-3">
       <Link to="profile">
        <img
         className="w-10 h-10 rounded-full"
         src="/carms.jpg"
         alt="carms"
        />
       </Link>
       <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <NavLink to="favorites">
       <button
        type="button"
        className="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-300"
       >
        <i className="fa-solid mr-2 fa-paw"></i> Favorites
       </button>
      </NavLink>
      <button
       data-collapse-toggle="navbar-cta"
       type="button"
       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
       aria-controls="navbar-cta"
       aria-expanded="false"
      >
       <span className="sr-only">Open main menu</span>
       <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
       >
        <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M1 1h15M1 7h15M1 13h15"
        />
       </svg>
      </button>
     </div>
     <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-cta"
     >
      <NavList />
     </div>
    </div>
   </nav>
  </>
 );
};

export default Nav;
