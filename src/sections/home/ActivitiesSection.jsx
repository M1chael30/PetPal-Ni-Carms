import React from "react";
import DropDownActivities from "./DropDownActivities";

const ActivitiesSection = () => {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Some activities you can play with pet
     </h2>
     <DropDownActivities />
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
     <img
      className="mt-4 w-full lg:mt-10 rounded-lg"
      src="./pet-1.jpg"
      alt="pet 1"
     />
     <img
      className="w-full rounded-lg object-contain"
      src="./pet-2.jpg"
      alt="pet 2"
     />
    </div>
   </div>
  </section>
 );
};

export default ActivitiesSection;
