import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import ItemDetailContainer from "./components/ItemDetailContainer";
import sampleImage from './images/Ropa1.jpg';
import sampleImage2 from './images/Ropa2.jpeg';
import sampleImage3 from './images/Ropa3.jpeg';
import sampleImage4 from './images/zapatos1.jpeg';
import sampleImage5 from './images/zapatos2.jpeg';
import sampleImage6 from './images/zapatos3.jpeg';
import sampleImage7 from './images/accesorios1.jpeg';
import sampleImage8 from './images/accesorios2.jpeg';
import sampleImage9 from './images/accesorios3.jpeg';
import ItemListContainer from "./components/ItemListContainer";


const ProductContext = createContext();

export function useProducts() {
  return useContext(ProductContext);
}

function App() {
  const [products, setProducts] = useState({ Ropa:[], Zapatos: [], Accesorios: [] });

  useEffect(() => {
    const fetchedProducts = {
      Ropa: [
        { id: 1, name: 'Camiseta 1', description: 'Descripción de la camiseta 1', price: '15.99', image: sampleImage },
        { id: 2, name: 'Camiseta 2', description: 'Descripción de la camiseta 2', price: '19.99', image: sampleImage2 },
        { id: 3, name: 'Camiseta 3', description: 'Descripción de la camiseta 3', price: '29.99', image: sampleImage3 },
      ],
      Zapatos: [
        { id: 1, name: 'Zapatos 1', description: 'Descripción del Zapatos 1', price: '15.99', image: sampleImage4 },
        { id: 2, name: 'Zapatos 2', description: 'Descripción del Zapatos 2', price: '19.99', image: sampleImage5 },
        { id: 3, name: 'Zapatos 3', description: 'Descripción del Zapatos 3', price: '29.99', image: sampleImage6 },
      ],
      Accesorios: [
        { id: 1, name: 'Accesorios 1', description: 'Descripción del Accesorios 1', price: '15.99', image: sampleImage7 },
        { id: 2, name: 'Accesorios 2', description: 'Descripción del Accesorios 2', price: '19.99', image: sampleImage8 },
        { id: 3, name: 'Accesorios 3', description: 'Descripción del Accesorios 3', price: '29.99', image: sampleImage9 },
      ],
    }

    setProducts(fetchedProducts);
  }, []);
  
  return (
    <ProductContext.Provider value={products}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda en línea!"/>} /> 
            <Route path="/category/:categoryId" element={<Catalogo />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
