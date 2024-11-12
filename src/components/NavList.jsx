import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../constants/app";

const NavList = () => {
 return (
  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
   {
    links.map((link) => {
     return (
      <li key={link.name}>
       <NavLink
        to={link.path}
        className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
       >
        {link.name}
       </NavLink>
      </li>
     );
    })
   }
  </ul>
 );
};

export default NavList;
