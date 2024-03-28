import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";
import Footer from "./Footer";
import Header1 from "./Homepage/Header1";

const MainLayout = () => {
  return (
    <div>
      <Header1 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
