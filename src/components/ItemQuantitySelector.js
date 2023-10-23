import React from 'react';

const ItemQuantitySelector = ({ contador, aumentarContador, disminuirContador }) => {
    return (
        <div className="contador">
            <p>Cantidad: {contador}</p>
            <div className="botones-contador">
                <button className="increment-button" onClick={aumentarContador}>+</button>
                <button className="decrement-button" onClick={disminuirContador}>-</button>
            </div>
        </div>
    );
};

export default ItemQuantitySelector;