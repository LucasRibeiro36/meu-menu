import React, { useState } from 'react';
import MenuController from '../../controllers/MenuController';
import MenuCard from './MenuCard';
import './Menu.css';

const Menu = ({ loja }) => {
    const shopController = new MenuController();
    const menuData = shopController.getMenuData(loja);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const filteredMenuData = menuData.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    });

    const item = ['Todos', ...new Set(menuData.map((item) => item.category))];
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredCategories = () => {
        if (selectedCategory === 'Todos') {
            return filteredMenuData;
        } else {
            return filteredMenuData.filter((item) => item.category === selectedCategory);
        }
    };



    return (
        <div className="menu">
            <div className="menu-header">
                <h2>Cardápio</h2>
            </div>
            <div className="search">
                <input type="text" placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)} />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    {item.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="menu-items">
                {filteredCategories().map((item, index) => (
                    <MenuCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
    
    
};

export default Menu;
