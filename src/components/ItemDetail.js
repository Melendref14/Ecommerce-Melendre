import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, contador, aumentarContador, disminuirContador, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, contador);
    setAddedToCart(true);
  };

  return (
    <div className="container">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-4">{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>

            <div className="contador">
              <p>Cantidad: {contador}</p>
              <div className="botones-contador">
                <button className="increment-button" onClick={aumentarContador}>
                  +
                </button>
                <button className="decrement-button" onClick={disminuirContador}>
                  -
                </button>
              </div>
            </div>

            {addedToCart ? (
              <div>
                <p>Producto agregado al carrito.</p>
                <Link to="/items" className="btn btn-warning">
                  Continuar comprando
                </Link>
              </div>
            ) : (
              <button className="btn btn-warning" onClick={handleAddToCart}>
                Agregar al carrito
              </button>
            )}
          </div>
          <div className="col-md-6">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
        </div>
      ) : (
        <p className="mt-4">Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;
