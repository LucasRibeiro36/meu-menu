import React, { useState } from 'react';
import './css/Carrinho.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import CarrinhoController from '../../controllers/CarrinhoController';
import EditarItemCarrinho from './EditarItemCarrinho';

const ItemCarrinho = ({ item }) => {
    const carrinhoController = CarrinhoController();
    const [showEditarModal, setShowEditarModal] = useState(false);

    // atualizar pagina
    const refreshPage = () => {
        window.location.reload();
    }

    const removerItem = (itemId) => {
        carrinhoController.removerItem(itemId);
    };

    const abrirEditarModal = () => {
        setShowEditarModal(true);
    };

    const fecharEditarModal = () => {
        setShowEditarModal(false);
    };

    const handleSave = (editedItem) => {
        carrinhoController.editarItem(editedItem);
        fecharEditarModal();
        refreshPage();
    }

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.ingredients.join(', ')}</td>
            <td>{item.description}</td>
            <td>{parseFloat(item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td>{parseFloat(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td>
                <button className="buttonRemover" onClick={() => removerItem(item.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} /> Remover
                </button>
            </td>
            <td>
                <button className="buttonEditar" onClick={abrirEditarModal}>
                    <FontAwesomeIcon icon={faEdit} /> Editar
                </button>
                {showEditarModal && <EditarItemCarrinho item={item} onClose={fecharEditarModal} onSave={handleSave}/>}
            </td>
        </tr>
    );
};

export default ItemCarrinho;
