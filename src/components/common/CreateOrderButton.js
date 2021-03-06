import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const CreateOrderButton = () => {
  return (
    <Link to="/new-order" className="create-order-btn">
      <FontAwesomeIcon icon="plus" className="btn-add-desktop" />
      <span>New order</span>
    </Link>
  );
};

export default CreateOrderButton;
