import React, { useState } from "react";
import Teams from "../sections/about/Teams";
import Typography from "../sections/about/Typography";

const About = () => {
 return (
  <main className="mt-20">
   <Typography />
   <hr className="h-px my-8 max-w-screen-lg mx-auto bg-gray-300 border-0 dark:bg-gray-700" />
   <Teams />
  </main>
 );
};

export default About;
