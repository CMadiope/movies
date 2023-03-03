import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className=' p-10 md:p-14 lg:px-14  overflow-hidden lg:flex'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
