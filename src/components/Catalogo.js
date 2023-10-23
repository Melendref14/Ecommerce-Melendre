import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../App';

const Catalogo = () => {
    const { categoryId } = useParams();
    const products = useProducts();

    useEffect(() => {
        
    }, [categoryId, products]);

    
    if (!Array.isArray(products)) {
        return <p>Cargando...</p>;
    }

    return (
        <div className='container'>
            <h2 className='mt-4'>Categoria: {categoryId}</h2>
            <ul className='list-group'>
                {products.map((product) => {
                    if (product.category === categoryId) {
                        return (
                            <li className='list-group-item' key={product.id}>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <p>Precio: {product.price}</p>
                                        <Link to={`/item/${product.id}`} className='btn btn-warning'>
                                            Ver detalles
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </div>
    );
}

export default Catalogo;
