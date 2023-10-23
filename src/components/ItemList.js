import React from 'react';

const Itemlist = ({ cart }) => {
    return (
        <div className="container">
            <h2>Resumen de la Orden</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity * item.product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Itemlist;