import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../App';


const Catalogo = () => {
    const { categoryId } = useParams();
    const products = useProducts();

    useEffect(() => {
    }, [categoryId, products]);

    return (
        <div className='container'>
            <h2 className='mt-4'>Categoria: {categoryId}</h2>
            <ul className='list-group'>
                {products.map((products) => {
                    if (products.category === categoryId) {
                        return (
                            <li className='list-group-item' key={products.id}>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img
                                            src={products.image}
                                            alt={products.name}
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div>
                                        <h3>{products.name}</h3>
                                        <p>{products.description}</p>
                                        <p>Precio: {products.price}</p>
                                        <Link to={`/item/${products.id}`} className='btn btn-warning'>
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