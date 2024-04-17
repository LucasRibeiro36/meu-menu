// CarrinhoController.js
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CarrinhoController = () => {
    const [cookies, setCookie] = useCookies(['carrinho']);
    const [carrinho, setCarrinho] = useState(cookies.carrinho || []);

    useEffect(() => {
        setCookie('carrinho', carrinho);
    }, [carrinho, setCookie]);

    const adicionarItem = (item) => {
        const itemIndex = carrinho.findIndex((i) => i.id === item.id);
        if (itemIndex === -1) {
            setCarrinho([...carrinho, item]);
        } else {
            const newCarrinho = [...carrinho];
            newCarrinho[itemIndex].quantity += item.quantity;
            setCarrinho(newCarrinho);
        }
    };

    const removerItem = (itemId) => {
        setCarrinho(carrinho.filter((item) => item.id !== itemId));
    };

    const editarItem = (editedItem) => {
        console.log(editedItem);
        const itemIndex = carrinho.findIndex((i) => i.id === editedItem.id);
        if (itemIndex !== -1) {
            const newCarrinho = [...carrinho];
            newCarrinho[itemIndex].quantity = editedItem.quantity;
            setCarrinho(newCarrinho);
        }
    };

    const getItensCarrinho = () => {
        return carrinho;
    }

    return {
        carrinho,
        adicionarItem,
        removerItem,
        getItensCarrinho,
        editarItem,
    };
};

export default CarrinhoController;
