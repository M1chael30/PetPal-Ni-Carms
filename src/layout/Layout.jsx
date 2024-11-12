import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
 return (
  <>
   <Nav />
   <Outlet />
   <Footer />
  </>
 );
};

export default Layout;
