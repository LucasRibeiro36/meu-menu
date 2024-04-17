import React, { useState } from 'react';
import MenuController from '../../controllers/MenuController';
import MenuCard from './MenuCard';
import './Menu.css';

const Menu = ({ loja }) => {
    const shopController = new MenuController();
    const menuData = shopController.getMenuData(loja);
    const [search, setSearch] = useState('');

    const filteredMenuData = menuData.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="menu">
            <h2>Cardápio</h2>
            <input type="text" placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)} />
            {filteredMenuData.map((item, index) => (
                <MenuCard key={index} item={item} />
            ))}
        </div>
    );
};

export default Menu;
