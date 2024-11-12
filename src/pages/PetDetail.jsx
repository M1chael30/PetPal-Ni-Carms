import React from "react";
import PetDetailSection from "../sections/petdetail/PetDetailSection";
import PetBreadCrumbNav from "../components/PetBreadCrumbNav";

const PetDetail = () => {
 return (
  <main className="mt-20">
   <PetBreadCrumbNav />
   <PetDetailSection />
  </main>
 );
};

export default PetDetail;
