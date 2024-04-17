import React, { useState, useEffect } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [isFooterSmall, setIsFooterSmall] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // Verifica se o usuário chegou ao final da página, ajustando o limite conforme necessário
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.9) {
                setIsFooterSmall(true);
            } else {
                setIsFooterSmall(false);
            }
        }

        // Adiciona o ouvinte de evento para a rolagem
        window.addEventListener('scroll', handleScroll);

        // Remove o ouvinte de evento quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`footer ${isFooterSmall ? 'small' : ''}`}>
            <a href="/cardapio" className="footer-button">
                <div>
                    <FontAwesomeIcon icon={faUtensils} />
                </div>
                <p>Cardápio</p>
            </a>

            <a href="/carrinho" className="footer-button">
                <div>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <p>Carrinho</p>
            </a>
            <a href="/login" className="footer-button">
                <div>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <p>Entrar</p>
            </a>
        </div>
    );
};

export default Footer;
