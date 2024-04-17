import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CarrinhoController = () => {
    const [cookies, setCookie] = useCookies(['carrinho']);
    const [carrinho, setCarrinho] = useState(cookies.carrinho || []);
    const [nextId, setNextId] = useState(cookies.nextId || 1); // Estado para o próximo ID disponível

    useEffect(() => {
        setCookie('carrinho', carrinho);
        setCookie('nextId', nextId);
    }, [carrinho, nextId, setCookie]);

    const adicionarItem = (item) => {
        const newItem = { ...item, id: nextId }; // Adiciona o próximo ID ao item
        setNextId(nextId + 1); // Atualiza o próximo ID disponível
        setCarrinho([...carrinho, newItem]);
    };

    const removerItem = (itemId) => {
        const updatedCarrinho = carrinho.filter((item) => item.id !== itemId);
        setCarrinho(updatedCarrinho);
        if (updatedCarrinho.length === 0) {
            setNextId(1); // Zera o próximo ID disponível quando todos os itens forem removidos
        }
    };

    const editarItem = (editedItem) => {
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
