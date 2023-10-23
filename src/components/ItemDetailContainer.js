import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useProducts, useCart } from '../App'; 
import '../styles.css';
import ItemQuantitySelector from './ItemQuantitySelector';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const products = useProducts();
    const { cart, setCart } = useCart(); 

    const [product, setProduct] = useState(null);
    const [contador, setContador] = useState(1);

    useEffect(() => {
        const productToDisplay = products.find((p) => p.id === Number(itemId));

        if (productToDisplay) {
            setProduct(productToDisplay);
        }
    }, [itemId, products]);

    const aumentarContador = () => {
        setContador(contador + 1);
    };

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const addToCart = () => {
        if (product) {
            const updatedCart = [...cart];
    
            const existingProductIndex = updatedCart.findIndex((item) => item.product.id === product.id);
            if (existingProductIndex !== -1) {
                updatedCart[existingProductIndex].quantity += contador;
            } else {
                updatedCart.push({ product, quantity: contador });
            }
    
            setCart(updatedCart); 
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

                        <ItemQuantitySelector contador={contador} aumentarContador={aumentarContador} disminuirContador={disminuirContador} />

                        <button className='mt-4 btn btn-warning' onClick={addToCart}>
                            Agregar al carrito
                        </button>
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
