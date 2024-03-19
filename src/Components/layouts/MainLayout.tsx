import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://image.vietgoing.com/article/cam-nang-du-lich-tam-dao-tu-a-den-z-moi-nhat-2021.jpg")'}}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default MainLayout;
