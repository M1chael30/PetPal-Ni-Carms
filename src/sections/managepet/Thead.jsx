import React from "react";

const Thead = () => {
 return (
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
   <tr>
    <th scope="col" className="px-4 py-4">
     Name
    </th>
    <th scope="col" className="px-4 py-3">
     Breed
    </th>
    <th scope="col" className="px-4 py-3">
     Age
    </th>
    <th scope="col" className="px-4 py-3">
     Description
    </th>
    <th scope="col" className="px-4 py-3">
    Gender
    </th>
    <th scope="col" className="px-4 py-3">
     <span className="sr-only">Actions</span>
    </th>
   </tr>
  </thead>
 );
};

export default Thead;
