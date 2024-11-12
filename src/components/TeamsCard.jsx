import React from "react";
import { Link } from "react-router-dom";
import { teams } from "../constants/app";

const TeamsCard = () => {
 return (
  <>
   <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {teams.map((team) => {
     const spanCheck = team.name === "Carms" ? "col-span-4" : "";
     return (
      <div
       className={`text-center text-gray-500 dark:text-gray-400 ${spanCheck}`}
       key={team.label}
      >
       <img
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        src={team.src}
        alt={team.label}
       />
       <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {team.name}
       </h3>
       <p>{team.pos}</p>
       <ul className="flex justify-center mt-4 space-x-4">
        <li>
         <Link
          to={team.fbLink}
          className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
         >
         <i className="fa-brands text-lg fa-facebook"></i>
         </Link>
        </li>
        <li>
         <Link
          to={team.xLink}
          className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
         >
          <i className="fa-brands text-lg text-blue-400 fa-twitter"></i>
         </Link>
        </li>
        <li>
         <Link
          to={team.gitLink}
          className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
         >
          <i className="fa-brands text-lg text-gray-700 fa-github"></i>
         </Link>
        </li>
        <li>
         <Link
          to={team.dribbLink}
          className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
         >
          <i className="fa-brands text-lg text-red-400 fa-dribbble"></i>
         </Link>
        </li>
       </ul>
      </div>
     );
    })}
   </div>
  </>
 );
};

export default TeamsCard;
