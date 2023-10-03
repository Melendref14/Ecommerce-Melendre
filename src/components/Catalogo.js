import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../App';


const Catalogo = () => {
    const { categoryId } = useParams();
    const products = useProducts()[categoryId] || [];

    useEffect(() => {
      
    }, [categoryId, products]);

    return (
        <div className='container'>
            <h2 className='mt-4'>Categoria: {categoryId}</h2>
            <ul className='list-group'>
                {products.map((product) => (
                    <li className='list-group-item' key={product.id}>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='img-fluid'
                                />
                            </div>
                            <div className='col-md-9'>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <Link to={`/item/${product.id}`} className='btn btn-warning'>
                                    Ver Detalles
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catalogo;