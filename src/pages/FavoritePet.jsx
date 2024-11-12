import React from "react";
import FavPetSection from "../sections/favoritepet/FavPetSection";
import FavPetBreadCrumbNav from "../components/FavPetBreadCrumbNav";

const FavoritePet = () => {
 return (
  <main className="mt-20">
   <FavPetBreadCrumbNav />
   <FavPetSection />
  </main>
 );
};

export default FavoritePet;
