import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../App';

const ItemDetailContainer = () => {
    const { itemId } = useParams(); 
    const { Ropa, Zapatos, Accesorios } = useProducts();

    const product = [...Ropa, ...Zapatos, ...Accesorios].find(
        (p) => p.id === Number(itemId)
    );

    useEffect(() => {
       
    }, [itemId, Ropa, Zapatos, Accesorios]);

    return (
        <div className='container'>
            {product ? (
                <div>
                    <h2 className='mt-4'>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Precio: {product.price}</p>
                </div>
            ) : (
                <p className='mt-4'>Cargando...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;