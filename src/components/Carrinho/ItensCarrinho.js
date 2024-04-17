import React from 'react';
import { useNavigate } from "react-router-dom";
import './css/Carrinho.css';
import ItemCarrinho from './ItemCarrinho';

const ItensCarrinho = ({ itens }) => {

    const history = useNavigate();

    const continuarComprando = () => {
        history('/cardapio');
    }


    return (
        <div className="itens-carrinho">
            <table className="tabela-carrinho">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Sabor</th>
                        <th>Tamanho</th>
                        <th>Preço</th>
                        <th>Subtotal</th>
                        <th>Remover</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {itens.map((item, index) => (
                        <ItemCarrinho item={item} key={index} />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="6">
                            <span>Total: R$ {parseFloat(itens.reduce((acc, item) => acc + item.price * item.quantity, 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                        </th>
                        <th colSpan="1">
                            <button className="buttonContinuar" onClick={continuarComprando}>Continuar Comprando</button>
                        </th>
                        <th colSpan="1">
                            <button className="buttonFinalizar">Finalizar Compra</button>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};


export default ItensCarrinho;
