import React from "react";

const ServicesSection = () => {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mb-8 lg:mb-16">
     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Services we offer
     </h2>
     <p className="text-gray-500 sm:text-xl dark:text-gray-400">
      At PetPal, we offer a variety of services including adoption, playdates,
      and grooming to ensure both pets and their owners have the best
      experience. Whether you're looking for a new companion, a fun outing, or
      top-notch care, we've got you covered.
     </p>
    </div>

    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
     <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-orange-500 lg:h-12 lg:w-12 dark:bg-orange-900">
      <i class="fa-solid text-lg text-white fa-dog"></i>
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">Playdate</h3>
      <p className="text-gray-500 dark:text-gray-400">
      Our playdates at PetPal are a fun-filled opportunity for dogs to socialize, exercise, and bond with other pets in a safe, supervised environment. 
      It’s the perfect way for your dog to make new friends and burn off energy while having a blast.
      </p>
     </div>

     <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-orange-500 lg:h-12 lg:w-12 dark:bg-orange-500">
      <i class="fa-solid text-lg text-white fa-paw"></i>
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">DayPal</h3>
      <p className="text-gray-500 dark:text-gray-400">
      Adopt a dog for a day at PetPal and enjoy the joy of companionship without the long-term commitment. 
      Whether you're looking for a fun adventure, some cuddle time or simply want to experience the bond of having a dog by your side, it's the perfect way to share a day with a furry friend.
      </p>
     </div>

     <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-orange-500 lg:h-12 lg:w-12 dark:bg-orange-500">
      <i class="fa-solid text-lg text-white fa-star"></i>
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">
       Grooming
      </h3>
      <p className="text-gray-500 dark:text-gray-400">
      PetPal's grooming services offer a complete pampering experience for your dog, including baths, brushing, nail trimming, ear cleaning, and even specialty treatments for coats of all types. 
      Our skilled groomers use pet-friendly products and techniques to ensure your dog is not only clean but also comfortable and relaxed throughout the process. 
      Whether it's a quick touch-up or a full grooming session, we make sure your furry friend leaves looking and feeling their best.
      </p>
     </div>
    </div>
   </div>
  </section>
 );
};

export default ServicesSection;
