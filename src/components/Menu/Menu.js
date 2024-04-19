import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import MenuController from '../../controllers/MenuController';
import MenuCard from './MenuCard';
import './Menu.css';

const Menu = ({ loja }) => {
    const shopController = new MenuController();
    const menuData = shopController.getMenuData(loja);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Estado para controlar a abertura e fechamento do campo de pesquisa

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

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className="menu">
            <div className="menu-header">
                <h2>Cardápio</h2>
            </div>
            <div className="search">
                {isSearchOpen && (
                    <>
                        <div class="close-icon-container">
                            <div className='close-icon' onClick={toggleSearch}>
                                <FontAwesomeIcon icon={faClose} />
                            </div>
                        </div>

                        <input type="text" placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)} />
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            {item.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </>
                ) || (
                        <div className='search-icon' onClick={toggleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    )
                }
            </div>
            {
                item.map((category, index) => (
                    <div key={index}>
                        {filteredCategories().filter((item) => item.category === category).length > 0 ? (
                            <h3>{category}</h3>
                        ) : null}
                        <div className="menu-items">
                            {filteredCategories()
                                .filter((item) => item.category === category)
                                .map((item, idx) => (
                                    <MenuCard item={item} key={idx} />
                                ))}
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default Menu;
