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

  const createItem = async (name, imageLink, price, description, category) => {
    const firebaseConfig = {
      apiKey: "AIzaSyAYOQzY3k2wqZYx1KiJGTAF9c7h9cXWQoQ",
      authDomain: "ecommerce-melendre.firebaseapp.com",
      projectId: "ecommerce-melendre",
      storageBucket: "ecommerce-melendre.appspot.com",
      messagingSenderId: "533151863828",
      appId: "1:533151863828:web:d8abb86fd88fef7603c301",
      measurementId: "G-MKEC9BR9RH"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
      if (!productsCreated) {
        const docRef = await addDoc(collection(db, "items"), {
          name: name,
          imageLink: imageLink,
          price: price,
          description: description,
          category: category,
        });
        console.log("Producto creado con ID: ", docRef.id);
      }
    } catch (error) {
      console.error("Error al agregar el producto: ", error);
    }
  };

  const handleCheckout = async (orderData) => {
    const firebaseConfig = {
      apiKey: "AIzaSyAYOQzY3k2wqZYx1KiJGTAF9c7h9cXWQoQ",
      authDomain: "ecommerce-melendre.firebaseapp.com",
      projectId: "ecommerce-melendre",
      storageBucket: "ecommerce-melendre.appspot.com",
      messagingSenderId: "533151863828",
      appId: "1:533151863828:web:d8abb86fd88fef7603c301",
      measurementId: "G-MKEC9BR9RH"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const docRef = await addDoc(collection(db, "orders"), orderData);

    console.log("Orden enviada con ID: ", docRef.id);
  };

  useEffect(() => {
    if (!productsCreated) {
      createItem("Camiseta 1", sampleImage, 15.99, "Descripción de la camiseta 1", "Ropa");
      createItem("Camiseta 2", sampleImage2, 19.99, "Descripción de la camiseta 2", "Ropa");
      createItem("Camiseta 3", sampleImage3, 29.99, "Descripción de la camiseta 3", "Ropa");
      createItem("Zapatos 1", sampleImage4, 15.99, "Descripción de los zapatos 1", "Zapatos");
      createItem("Zapatos 2", sampleImage5, 19.99, "Descripción de los zapatos 2", "Zapatos");
      createItem("Zapatos 3", sampleImage6, 29.99, "Descripción de los zapatos 3", "Zapatos");
      createItem("Accesorios 1", sampleImage7, 15.99, "Descripción de los accesorios 1", "Accesorios");
      createItem("Accesorios 2", sampleImage8, 19.99, "Descripción de los accesorios 2", "Accesorios");
      createItem("Accesorios 3", sampleImage9, 29.99, "Descripción de los accesorios 3", "Accesorios");
      setProductsCreated(true);
    }
  }, []);

  useEffect(() => {
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
  }, []);

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
