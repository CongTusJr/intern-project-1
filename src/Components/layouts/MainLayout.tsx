import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://vietnamdiscovery.com/wp-content/uploads/2019/11/Tam-Dao-National-Park-Featured.jpg")', backgroundAttachment: 'fixed'}}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default MainLayout;
