import React from "react";

const DropDownActivities = () => {
 return (
  <>
   <div id="accordion-open" data-accordion="open">
    <h2 id="accordion-open-heading-1">
     <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
     >
      <span className="flex gap-2 items-center">
       <i className="fa-solid text-orange-500 fa-paw"></i> Playful Extravaganza
      </span>
      <svg
       data-accordion-icon
       className="w-3 h-3 rotate-180 shrink-0"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 10 6"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5 5 1 1 5"
       />
      </svg>
     </button>
    </h2>
    <div
     id="accordion-open-body-1"
     className="hidden"
     aria-labelledby="accordion-open-heading-1"
    >
     <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       Unleash the fun with a high-energy play session that’s sure to tire out
       your furry friend! Whether it’s fetch, tug-of-war, or a new trick, this
       activity is designed for dogs who love to move and groove. Bond with your
       pet through an active and joyful playdate.
      </p>
     </div>
    </div>
    <h2 id="accordion-open-heading-2">
     <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-2"
      aria-expanded="false"
      aria-controls="accordion-open-body-2"
     >
      <span className="flex gap-2 items-center">
       <i className="fa-solid text-orange-500 fa-paw"></i>
       Chilly Snuggle
      </span>
      <svg
       data-accordion-icon
       className="w-3 h-3 rotate-180 shrink-0"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 10 6"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5 5 1 1 5"
       />
      </svg>
     </button>
    </h2>
    <div
     id="accordion-open-body-2"
     className="hidden"
     aria-labelledby="accordion-open-heading-2"
    >
     <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       When the weather gets cool, there’s nothing better than curling up
       together for some cozy cuddle time. Enjoy the warmth of each other’s
       company with soothing petting, belly rubs, and soft blankets. A perfect
       way to relax and unwind on a chilly day.
      </p>
     </div>
    </div>
    <h2 id="accordion-open-heading-3">
     <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-3"
      aria-expanded="false"
      aria-controls="accordion-open-body-3"
     >
      <span className="flex gap-2 items-center">
       <i className="fa-solid text-orange-500 fa-paw"></i>
       Walkie Daydate
      </span>
      <svg
       data-accordion-icon
       className="w-3 h-3 rotate-180 shrink-0"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 10 6"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5 5 1 1 5"
       />
      </svg>
     </button>
    </h2>
    <div
     id="accordion-open-body-3"
     className="hidden"
     aria-labelledby="accordion-open-heading-3"
    >
     <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       Head out for a scenic stroll with your dog! Whether it’s a local park,
       neighborhood loop, or new hiking trail, this activity is about quality
       time and fresh air. Perfect for both social pups and quiet companions who
       love to explore the world on paw.
      </p>
     </div>
    </div>
    <h2 id="accordion-open-heading-4">
     <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-4"
      aria-expanded="false"
      aria-controls="accordion-open-body-4"
     >
      <span className="flex gap-2 items-center">
       <i className="fa-solid text-orange-500 fa-paw"></i>
       Errands Check-in
      </span>
      <svg
       data-accordion-icon
       className="w-3 h-3 rotate-180 shrink-0"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 10 6"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5 5 1 1 5"
       />
      </svg>
     </button>
    </h2>
    <div
     id="accordion-open-body-4"
     className="hidden"
     aria-labelledby="accordion-open-heading-4"
    >
     <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       Make running errands a more enjoyable experience for both of you! Bring
       your dog along for a quick trip to the store, the post office, or the
       coffee shop. It’s a low-key way to socialize your dog and get tasks done
       while spending time together.
      </p>
     </div>
    </div>
    <h2 id="accordion-open-heading-5">
     <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-5"
      aria-expanded="false"
      aria-controls="accordion-open-body-5"
     >
      <span className="flex gap-2 items-center">
       <i className="fa-solid text-orange-500 fa-paw"></i>
       Adventure Seekers
      </span>
      <svg
       data-accordion-icon
       className="w-3 h-3 rotate-180 shrink-0"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 10 6"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5 5 1 1 5"
       />
      </svg>
     </button>
    </h2>
    <div
     id="accordion-open-body-5"
     className="hidden"
     aria-labelledby="accordion-open-heading-5"
    >
     <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       Take your dog on a thrilling adventure to explore new places! Whether
       it’s a beach, a trail, or a dog-friendly outing, this activity is all
       about discovery. Let your dog’s curiosity lead the way as you both enjoy
       the excitement.
      </p>
     </div>
    </div>
   </div>
  </>
 );
};

export default DropDownActivities;
