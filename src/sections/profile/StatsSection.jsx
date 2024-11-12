import React from "react";

const StatsSection = () => {
 return (
  <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-gray-700 md:py-8 lg:grid-cols-4 xl:gap-16">
   <div>
    <svg
     className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
     aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     fill="none"
     viewBox="0 0 24 24"
    >
     <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
     />
    </svg>
    <h3 className="mb-2 text-gray-500 dark:text-gray-400">Orders made</h3>
    <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
     24
     <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
      <svg
       className="-ms-1 me-1 h-4 w-4"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v13m0-13 4 4m-4-4-4 4"
       ></path>
      </svg>
      10.3%
     </span>
    </span>
    <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
     <svg
      className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
     >
      <path
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
     </svg>
     vs 20 last 3 months
    </p>
   </div>
   <div>
    <svg
     className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
     aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     fill="none"
     viewBox="0 0 24 24"
    >
     <path
      stroke="currentColor"
      strokeWidth="2"
      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
     />
    </svg>
    <h3 className="mb-2 text-gray-500 dark:text-gray-400">Reviews added</h3>
    <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
     16
     <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
      <svg
       className="-ms-1 me-1 h-4 w-4"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v13m0-13 4 4m-4-4-4 4"
       ></path>
      </svg>
      8.6%
     </span>
    </span>
    <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
     <svg
      className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
     >
      <path
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
     </svg>
     vs 14 last 3 months
    </p>
   </div>
   <div>
    <svg
     className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
     aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     fill="none"
     viewBox="0 0 24 24"
    >
     <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
     />
    </svg>
    <h3 className="mb-2 text-gray-500 dark:text-gray-400">
     Favorite products added
    </h3>
    <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
     8
     <span className="ms-2 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
      <svg
       className="-ms-1 me-1 h-4 w-4"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v13m0-13 4 4m-4-4-4 4"
       ></path>
      </svg>
      12%
     </span>
    </span>
    <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
     <svg
      className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
     >
      <path
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
     </svg>
     vs 10 last 3 months
    </p>
   </div>
   <div>
    <svg
     className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
     aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     fill="none"
     viewBox="0 0 24 24"
    >
     <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"
     />
    </svg>
    <h3 className="mb-2 text-gray-500 dark:text-gray-400">Product returns</h3>
    <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
     2
     <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
      <svg
       className="-ms-1 me-1 h-4 w-4"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v13m0-13 4 4m-4-4-4 4"
       ></path>
      </svg>
      50%
     </span>
    </span>
    <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
     <svg
      className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
     >
      <path
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
     </svg>
     vs 1 last 3 months
    </p>
   </div>
  </div>
 );
};

export default StatsSection;
