import React from "react";
import FavoritesSection from "../sections/favorites/FavoritesSection";
import BreadCrumbNav from "../components/BreadCrumbNav";

const Favorites = () => {
 return (
  <main className="mt-20">
   <BreadCrumbNav />
   <FavoritesSection />
  </main>
 );
};

export default Favorites;
