import React from "react";
import StatsSection from "./StatsSection";
import { Link } from "react-router-dom";

const ProfileSection = () => {
 return (
  <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-8">
   <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
    <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
     General overview
    </h2>
    <StatsSection />
    <div className="py-4 md:py-8">
     <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
      <div className="space-y-4">
       <div className="flex space-x-4">
        <img className="h-16 w-16 rounded-lg" src="carms.jpg" alt="carms" />
        <div>
         <span className="mb-2 inline-block rounded bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-300">
          {" "}
          Verified Customer <i class="fa-solid text-green-600 fa-check"></i>
         </span>
         <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
          Carms
         </h2>
        </div>
       </div>
       <dl className="">
        <dt className="font-semibold text-gray-900 dark:text-white">
         Email Address
        </dt>
        <dd className="text-gray-500 dark:text-gray-400">carms@gmail.com</dd>
       </dl>
       <dl>
        <dt className="font-semibold text-gray-900 dark:text-white">
         Most Recent Service Used:
        </dt>
        <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
         <i class="fa-solid fa-paw"></i>
         Grooming
        </dd>
       </dl>
       <dl>
        <dt className="font-semibold text-gray-900 dark:text-white">
         Member since:
        </dt>
        <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
         <i class="fa-regular fa-user"></i>
         Sep 12, 2004
        </dd>
       </dl>
       <dl>
        <Link to="manage-pet">
         <dt className="flex items-center gap-1 text-gray-900 hover:underline dark:text-gray-400">
          <i class="fa-solid mr-2 fa-arrow-right"></i> Manage Pet
         </dt>
        </Link>
       </dl>
      </div>
      <div className="space-y-4">
       <dl>
        <dt className="font-semibold text-gray-900 dark:text-white">
         Phone Number
        </dt>
        <dd className="text-gray-500 dark:text-gray-400">
         +1234 567 890 / +12 345 678
        </dd>
       </dl>
       <dl>
        <dt className="font-semibold text-gray-900 dark:text-white">
         Dog Breeds Owned:
        </dt>
        <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
         <i class="fa-solid fa-paw"></i>
         German Shepherd, Labrador Retriever
        </dd>
       </dl>
       <dl>
        <dt className="font-semibold text-gray-900 dark:text-white">
         Hours of Services invested
        </dt>
        <dd className="text-gray-500 dark:text-gray-400">
         <i class="fa-solid mr-2 fa-clock"></i>
         200 hours
        </dd>
       </dl>
       <dl>
        <dt className="mb-1 font-semibold text-gray-900 dark:text-white">
         Payment Methods
        </dt>
        <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
          <img
           className="h-4 w-auto dark:hidden"
           src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
           alt=""
          />
          <img
           className="hidden h-4 w-auto dark:flex"
           src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
           alt=""
          />
         </div>
         <div>
          <div className="text-sm">
           <p className="mb-0.5 font-medium text-gray-900 dark:text-white">
            Visa ending in 7658
           </p>
           <p className="font-normal text-gray-500 dark:text-gray-400">
            Expiry 10/2024
           </p>
          </div>
         </div>
        </dd>
       </dl>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default ProfileSection;
