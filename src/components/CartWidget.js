/* CartWidget */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const itemCount = 5; // Cantidad Fija

    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            <span className="badge badge-danger">
                <span className="text-dark">{itemCount}</span>
            </span>
        </div>
    );
}

export default CartWidget;