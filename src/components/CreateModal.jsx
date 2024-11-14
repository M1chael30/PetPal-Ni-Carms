import React from "react";

const CreateModal = () => {
 return (
  <div
   id="createProductModal"
   tabIndex="-1"
   aria-hidden="true"
   className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
   <div className="relative p-4 w-full max-w-2xl max-h-full">
    <div className="relative p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800 sm:p-5">
     <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
       Add Pet
      </h3>
      <button
       type="button"
       className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
       data-modal-target="createProductModal"
       data-modal-toggle="createProductModal"
      >
       <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         fillRule="evenodd"
         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
         clipRule="evenodd"
        />
       </svg>
       <span className="sr-only">Close modal</span>
      </button>
     </div>

     <form action="#">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
       <div>
        <label
         htmlFor="name"
         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
         Name
        </label>
        <input
         type="text"
         name="name"
         id="name"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
         placeholder="Type pet name"
         required=""
        />
       </div>
       <div>
        <label
         htmlFor="brand"
         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
         Breed
        </label>
        <input
         type="text"
         name="brand"
         id="brand"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
         placeholder="Dog Breed"
         required=""
        />
       </div>
       <div>
        <label
         htmlFor="price"
         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
         Age
        </label>
        <input
         type="number"
         name="price"
         id="price"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
         placeholder="Input Dog Age"
         required=""
        />
       </div>
       <div>
        <label
         htmlFor="category"
         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
         Gender
        </label>
        <select
         id="category"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
        >
         <option defaultValue="">Select category</option>
         <option value="TV">Female</option>
         <option value="PC">Male</option>
        </select>
       </div>
       <div className="sm:col-span-2">
        <label
         htmlFor="description"
         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
         Description
        </label>
        <textarea
         id="description"
         rows="4"
         className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
         placeholder="Write dog description here"
        ></textarea>
       </div>
      </div>
      <button
       type="submit"
       className="text-white inline-flex items-center bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      >
       <svg
        className="mr-1 -ml-1 w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         fillRule="evenodd"
         d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
         clipRule="evenodd"
        />
       </svg>
       Add new pet
      </button>
     </form>
    </div>
   </div>
  </div>
 );
};

export default CreateModal;
