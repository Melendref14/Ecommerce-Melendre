import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../App';
import '../styles.css';


const ItemDetailContainer = () => {
    const { itemId } = useParams(); 
    const products = useProducts();

    const [product, setProduct] = useState(null);

    useEffect(() => {
       const productToDisplay = products.find((p) => p.id === Number(itemId));

       if (productToDisplay) {
        setProduct(productToDisplay);
       }
    }, [itemId, products]);

    const [contador, setContador] = useState(1);

    const aumentarContador = () => {
        setContador(contador + 1);
    };

    const disminuidorContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className='container'>
            {product ? (
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='mt-4'>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Precio: {product.price}</p>

                        <div className='contador'>
                            <p>Cantidad: {contador}</p>
                            <div className='botones-contador'>
                                <button className='increment-button' onClick={aumentarContador}>+</button>
                                <button className='decrement-button' onClick={disminuidorContador}>-</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img
                            src={product.image}
                            alt={product.name}
                            className='img-fluid'
                        />
                    </div>
                </div>
            ) : (
                <p className='mt-4'>Cargando...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;