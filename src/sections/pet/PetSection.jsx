import React from "react";
import { Link } from "react-router-dom";
import { petList } from "../../constants/app";

const PetSection = () => {
 return (
  <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
   <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
     {petList.map((list, index) => {
      return (
       <div
        className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
        key={index}
       >
        <div className="h-56 w-full">
         <Link to={`/pet/${list.id}`}>
          <img
           className="mx-auto rounded-xl h-full"
           src={list.src}
           alt={list.name}
          />
         </Link>
        </div>
        <div className="pt-6">
         <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-300">
           {" "}
           {list.label}
          </span>
         </div>
         <Link
          to={`/pet/${list.id}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
         >
          {list.name}
         </Link>

         <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
           <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
           >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
           </svg>

           <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
           >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
           </svg>

           <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
           >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
           </svg>

           <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
           >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
           </svg>

           <svg
            className="h-4 w-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
           >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
           </svg>
          </div>

          <p className="text-sm font-medium text-gray-900 dark:text-white">
           5.0
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
           {list.rating}
          </p>
         </div>
         <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
           {list.price}
          </p>

          <button
           type="button"
           className="inline-flex items-center rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4  focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-800"
          >
           <i className="fa-regular text-base mr-2 fa-heart"></i> Add
          </button>
         </div>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
};

export default PetSection;
