// EditarItem.js
import React, { useState } from 'react';
import './css/EditarItemCarrinho.css';

const EditarItem = ({ item, onSave, onClose }) => {
    const [editedItem, setEditedItem] = useState({ ...item });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem({ ...editedItem, [name]: value });
    };

    const handleSave = () => {
        console.log(editedItem);
        onSave(editedItem);
    }

    return (
        <div className="editar-item">
            <div className="editar-item-content">
                <h2>Editar Item</h2>
                <div className="input-group">
                    <h4 htmlFor="name">Nome: {editedItem.name}</h4>
                </div>
                <div className="input-group">
                    <label htmlFor="quantity">Quantidade:</label>
                    <input type="number" id="quantity" name="quantity" value={editedItem.quantity} onChange={handleChange} />
                </div>
                <div className="button-group">
                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div>
    );
};

export default EditarItem;
