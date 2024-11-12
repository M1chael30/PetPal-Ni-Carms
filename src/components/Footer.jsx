import React from "react";

const Footer = () => {
 return (
  <>
   <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl text-center">
     <p className="my-6 text-gray-500 dark:text-gray-400">
      @Group MMACC
     </p>
     <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024-2025{" "}
      <a href="#" className="hover:underline">
       PetPal™
      </a>
      . All Rights Reserved.
     </span>
    </div>
   </footer>
  </>
 );
};

export default Footer;
