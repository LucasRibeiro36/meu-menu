import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <FontAwesomeIcon icon={faExclamationTriangle} className="icon" />
      <h1>404 - Página não encontrada</h1>
    </div>
  );
};

export default NotFound;
