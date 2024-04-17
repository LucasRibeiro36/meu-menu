import React, { useState } from 'react';
import CarrinhoController from '../../controllers/CarrinhoController';

const MenuCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState(item.flavors ? item.flavors[0].name : null); // Verifica se há sabores e define o sabor selecionado como o primeiro da lista
  const carrinhoController = CarrinhoController();

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };

  const addToCart = () => {
    const itemWithQuantity = { ...item, quantity, selectedFlavor };
    carrinhoController.adicionarItem(itemWithQuantity);
    setQuantity(1);
    refreshPage();
  };

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      {expanded ? (
        <>
          <h3>Ingredientes:</h3>
          <ul>
            {item.flavors && item.flavors.find(flavor => flavor.name === selectedFlavor).ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{item.description}</p>
        </>
      ) : (
        <p>{item.description}</p>
      )}
      <h3>R$ {parseFloat(item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h3>
      {item.flavors && ( // Verifica se há sabores
        <>
          <h3>Selecione o Sabor:</h3>
          <select value={selectedFlavor} onChange={handleFlavorChange}>
            {item.flavors.map((flavor, index) => (
              <option key={index} value={flavor.name}>{flavor.name}</option>
            ))}
          </select>
        </>
      )}
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <button onClick={toggleDetails}>{expanded ? 'Fechar Detalhes' : 'Ver Detalhes'}</button>
      <button onClick={addToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default MenuCard;
