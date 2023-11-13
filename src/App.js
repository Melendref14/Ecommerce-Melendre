import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogo from './components/Catalogo';
import Checkout from './components/CheckOut';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import sampleImage from './images/Ropa1.jpg';
import sampleImage2 from './images/Ropa2.jpeg';
import sampleImage3 from './images/Ropa3.jpeg';
import sampleImage4 from './images/zapatos1.jpeg';
import sampleImage5 from './images/zapatos2.jpeg';
import sampleImage6 from './images/zapatos3.jpeg';
import sampleImage7 from './images/accesorios1.jpeg';
import sampleImage8 from './images/accesorios2.jpeg';
import sampleImage9 from './images/accesorios3.jpeg';

const ProductContext = createContext();

export function useProducts() {
  return useContext(ProductContext);
}

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
}

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productsCreated, setProductsCreated] = useState(false);

  const createItems = async (items) => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
      const itemsCollection = collection(db, 'items');
      items.forEach(async (item) => {
        await addDoc(itemsCollection, item);
      });
      setProductsCreated(true); 
      console.log("Productos creados");
    } catch (error) {
      console.error("Error al agregar productos: ", error);
    }
  };

  const handleCheckout = async (orderData) => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const docRef = await addDoc(collection(db, "orders"), orderData);

    console.log("Orden enviada con ID: ", docRef.id);
  };

  useEffect(() => {
    if (!productsCreated) {
      const items = [
        { name: "Camiseta 1", imageLink: sampleImage, price: 15.99, description: "Descripción de la camiseta 1", category: "Ropa" },
        { name: "Camiseta 2", imageLink: sampleImage2, price: 19.99, description: "Descripción de la camiseta 2", category: "Ropa" },
        { name: "Camiseta 3", imageLink: sampleImage3, price: 29.99, description: "Descripción de la camiseta 3", category: "Ropa" },
        { name: "Zapatos 1", imageLink: sampleImage4, price: 15.99, description: "Descripción de los zapatos 1", category: "Zapatos" },
        { name: "Zapatos 2", imageLink: sampleImage5, price: 19.99, description: "Descripción de los zapatos 2", category: "Zapatos" },
        { name: "Zapatos 3", imageLink: sampleImage6, price: 29.99, description: "Descripción de los zapatos 3", category: "Zapatos" },
        { name: "Accesorios 1", imageLink: sampleImage7, price: 15.99, description: "Descripción del accesorio 1", category: "Accesorios" },
        { name: "Accesorios 2", imageLink: sampleImage8, price: 19.99, description: "Descripción del accesorio 2", category: "Accesorios" },
        { name: "Accesorios 3", imageLink: sampleImage9, price: 29.99, description: "Descripción del accesorio 3", category: "Accesorios" },
      ];
      createItems(items);
    }
  }, [productsCreated]);

  useEffect(() => {
    if (productsCreated && products.length === 0) {
      setProducts([
        { id: 1, name: 'Camiseta 1', description: 'Descripción de la camiseta 1', price: '15.99', image: sampleImage, category: 'Ropa' },
        { id: 2, name: 'Camiseta 2', description: 'Descripción de la camiseta 2', price: '19.99', image: sampleImage2, category: 'Ropa' },
        { id: 3, name: 'Camiseta 3', description: 'Descripción de la camiseta 3', price: '29.99', image: sampleImage3, category: 'Ropa' },
        { id: 4, name: 'Zapatos 1', description: 'Descripción de los zapatos 1', price: '15.99', image: sampleImage4, category: 'Zapatos' },
        { id: 5, name: 'Zapatos 2', description: 'Descripción de los zapatos 2', price: '19.99', image: sampleImage5, category: 'Zapatos' },
        { id: 6, name: 'Zapatos 3', description: 'Descripción de los zapatos 3', price: '29.99', image: sampleImage6, category: 'Zapatos' },
        { id: 7, name: 'Accesorios 1', description: 'Descripción de los Accesorios 1', price: '15.99', image: sampleImage7, category: 'Accesorios' },
        { id: 8, name: 'Accesorios 2', description: 'Descripción de los Accesorios 2', price: '19.99', image: sampleImage8, category: 'Accesorios' },
        { id: 9, name: 'Accesorios 3', description: 'Descripción de los Accesorios 3', price: '29.99', image: sampleImage9, category: 'Accesorios' },
      ]);
    }
  }, [productsCreated, products]);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda en línea!" />} />
              <Route path="/category/:categoryId" element={<Catalogo />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<Checkout cart={cart} onCheckout={handleCheckout} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
