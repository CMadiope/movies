import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className=' p-10 md:p-14 lg:px-14  overflow-hidden  w-full'>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
