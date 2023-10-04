import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../App';
import '../styles.css';


const ItemDetailContainer = () => {
    const { itemId } = useParams(); 
    const { Ropa, Zapatos, Accesorios } = useProducts();

    const [product, setProduct] = useState(null);

    useEffect(() => {
       const productInRopa = Ropa.find((p) => p.id === Number(itemId));
       const productInZapatos = Zapatos.find((p) => p.id === Number(itemId));
       const productInAccesorios = Accesorios.find((p) => p.id === Number(itemId));

       if (productInRopa) {
        setProduct({ ...productInRopa, categoria: 'Ropa' });
       } else if (productInZapatos) {
        setProduct({ ...productInZapatos, categoria: 'Zapatos' });
       } else if (productInAccesorios) {
        setProduct({ ...productInAccesorios, categoria: 'Accesorios' });
       }
    }, [itemId, Ropa, Zapatos, Accesorios]);

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