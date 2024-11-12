import React from "react";
import { Link } from "react-router-dom";
import { favList } from "../constants/app";

const PetCard = () => {
 return (
  <div className="space-y-6">
   {favList.map((list, index) => {
    return (
     <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6" key={index}>
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
       <Link to={`/fav-pet/${list.id}`} className="shrink-0 md:order-1">
        <img
         className="w-24 mx-auto rounded-lg dark:hidden"
         src={list.src}
         alt={list.label}
        />
       </Link>
       <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="text-end md:order-4 md:w-32">
         <p className="text-base font-bold text-gray-900 dark:text-white">
          {list.price}
         </p>
        </div>
       </div>

       <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <Link
         to={`/fav-pet/${list.id}`}
         className="text-base font-medium text-gray-900 hover:underline dark:text-white"
        >
         {`${list.desc.substring(0, 95)}...`}
        </Link>

        <div className="flex items-center gap-4">
         <button
          type="button"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
         >
          <i className="fa-solid text-red-500 text-base mr-2 fa-heart"></i>
          Favorite
         </button>

         <button
          type="button"
          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
         >
          <i className="fa-solid fa-x text-red-500 mr-2 text-base"></i>
          Remove
         </button>
        </div>
       </div>
      </div>
     </div>
    );
   })}
  </div>
 );
};

export default PetCard;
