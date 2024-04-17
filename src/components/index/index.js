import React from 'react';
import Menu from '../Menu/Menu';
import './index.css';
import Footer from '../Footer/Footer';
import MenuLoja from '../Menu/MenuLoja';

const Index = () => {
  return (
    <div className="app">
      <div className="topbar">Meu Cardápio</div>
      <MenuLoja />
      <Menu />
      <Footer />
    </div>
  );
};

export default Index;
