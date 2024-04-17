import React from 'react';
import './MenuLoja.css';
import ShopController from '../../controllers/ShopController';

const MenuLoja = () => {
    const shopController = new ShopController();
    const shopData = shopController.getShopData();

    return (
        <div className="menuLoja">
            <div className="shop-info">
                <img src={shopData.image} alt={shopData.name} />
                <h2>{shopData.name}</h2>
                <p>{shopData.address}</p>
                <p>{shopData.phone}</p>
                <p>{shopData.email}</p>
                <p>{shopData.description}</p>
                <p>Horário de funcionamento:</p>
                <ul>
                    <li>Segunda-feira: {shopData.hours.monday}</li>
                    <li>Terça-feira: {shopData.hours.tuesday}</li>
                    <li>Quarta-feira: {shopData.hours.wednesday}</li>
                    <li>Quinta-feira: {shopData.hours.thursday}</li>
                    <li>Sexta-feira: {shopData.hours.friday}</li>
                    <li>Sábado: {shopData.hours.saturday}</li>
                    <li>Domingo: {shopData.hours.sunday}</li>
                </ul>
                <p className={shopData.isOpen ? 'open-status' : ''}>
                    {shopData.isOpen ? 'Aberto agora' : 'Fechado agora'}
                </p>
            </div>
        </div>
    );
};

export default MenuLoja;
