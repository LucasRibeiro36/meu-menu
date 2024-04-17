import React from 'react';
import Menu from '../Menu/Menu';
import './Cardapio.css';
import Footer from '../Footer/Footer';
import MenuLoja from '../Menu/MenuLoja';

const Cardapio = () => {
  return (
    <div className="app">
      <div className="topbar">Meu Cardápio</div>
      <MenuLoja />
      <Menu />
      <Footer />
    </div>
  );
};

export default Cardapio;
