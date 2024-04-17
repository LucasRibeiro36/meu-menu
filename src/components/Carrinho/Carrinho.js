import React from 'react';
import './css/Carrinho.css';
import Footer from '../Footer/Footer';
import ItensCarrinho from './ItensCarrinho';
import CarrinhoController from '../../controllers/CarrinhoController';

const Cardapio = () => {
  // Use CarrinhoController as a functional component
  const { getItensCarrinho } = CarrinhoController();
  const itensCarrinho = getItensCarrinho();

  return (
    <div className="app">
      <div className="topbar">Meu Cardápio</div>
      <ItensCarrinho itens={itensCarrinho}/>
      <Footer />
    </div>
  );
};

export default Cardapio;
