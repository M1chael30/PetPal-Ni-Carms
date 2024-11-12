import React from "react";

const Typography = () => {
 return (
  <section className="flex flex-col items-center justify-center px-8 py-8">
   <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-700 from-orange-400">
     PetPal
    </span>
   </h1>
   <p className="text-lg font-normal text-center text-gray-500 lg:text-xl dark:text-gray-400">
    Pet.pal is a web app where users can browse and select a "pal" (a dog) to
    spend time with, offering dog lovers the chance to enjoy companionship,
    bonding activities, and outdoor adventures for a few hours or a day. Ideal
    for those unable to commit to full-time pet ownership, Pet.pal enriches both
    users and dogs through shared experiences—with the option to adopt available
    dogs if a deeper connection forms.
   </p>
  </section>
 );
};

export default Typography;
