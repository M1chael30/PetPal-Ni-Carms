import React from "react";
import CreateModal from "../components/CreateModal";
import UpdateModal from "../components/UpdateModal";
import ReadModal from "../components/ReadModal";
import DeleteModal from "../components/DeleteModal";
import TableNav from "../sections/managepet/TableNav";
import BottomNav from "../sections/managepet/BottomNav";
import Thead from "../sections/managepet/Thead";
import Tbody from "../sections/managepet/Tbody";

const ManagePet = () => {
 return (
  <>
   <section className=" mt-24 dark:bg-gray-900 p-3 sm:p-5 antialiased">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
     <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <TableNav />
      <div className="overflow-x-auto">
       <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Thead />
        <Tbody />
       </table>
      </div>
      <BottomNav />
     </div>
    </div>
   </section>
   <CreateModal />
   <UpdateModal />
   <ReadModal />
   <DeleteModal />
  </>
 );
};

export default ManagePet;
