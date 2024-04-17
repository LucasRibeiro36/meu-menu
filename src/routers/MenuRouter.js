import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '../components/index/index';
import Cardapio from '../components/Cardapio/Cardapio';
import Carrinho from '../components/Carrinho/Carrinho';
import NotFound from '../components/NotFound/NotFound';

const MenuRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/cardapio" element={<Cardapio />} />
        <Route exact path="/carrinho" element={<Carrinho />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default MenuRouter;
