import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, onCheckout }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    const [purchaseComplete, setPurchaseComplete] = useState(false); 
    const navigate = useNavigate();

    const calculateTotal = () => {
        // Calcular el total en función del contenido del carrito
        let total = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        return total;
    }

    const handleCheckout = () => {
        if (!firstName || !lastName || !phone || !email || email !== confirmEmail) {
            setErrorMessage('Por favor, complete todos los campos y verifique que los correos electrónicos coincidan.');
            return;
        }

        const orderData = {
            firstName,
            lastName,
            phone,
            email,
            items: cart,
            total: calculateTotal(), // Calcular el total en función del contenido del carrito
        };

        onCheckout(orderData);

        setPurchaseComplete(true); // Marcar la compra como completa
    };

    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
            {purchaseComplete ? ( 
                <div>
                    <p style={{ color: 'green' }}>¡Gracias por su compra! Hemos enviado los detalles de su compra a su correo electrónico.</p>
                </div>
            ) : (
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Resumen de la compra</h5>
                                <ul className="list-group">
                                    {cart.map((item) => (
                                        <li className="list-group-item" key={item.product.id}>
                                            {item.product.name} - Cantidad: {item.quantity}
                                        </li>
                                    ))}
                                </ul>
                                <h5 className="mt-3">Total: ${calculateTotal()}</h5>
                                <button className="btn btn-warning mt-3" onClick={handleCheckout}>
                                    Procesar Pago
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Información de envío</h5>
                                <form>
                                    <div className="form-group">
                                        <label>Nombre:</label>
                                        <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Apellido:</label>
                                        <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Teléfono:</label>
                                        <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Correo Electrónico:</label>
                                        <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirmar Correo Electrónico:</label>
                                        <input type="text" className="form-control" onChange={(e) => setConfirmEmail(e.target.value)} />
                                    </div>
                                </form>
                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mostrar el mensaje de error */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
