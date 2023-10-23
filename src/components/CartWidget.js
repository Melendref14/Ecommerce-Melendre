import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../App'; 
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart } = useCart();

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/checkout">
            <div>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                <span className="badge badge-danger">
                    <span className="text-dark">{itemCount}</span>
                </span>
            </div>
        </Link>
    );
};

export default CartWidget;
