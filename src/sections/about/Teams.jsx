import TeamsCard from "../../components/TeamsCard";

const Teams = () => {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Our team
     </h2>
     <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
      MMACC
     </p>
    </div>
    <TeamsCard />
   </div>
  </section>
 );
};

export default Teams;
