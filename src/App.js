import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
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

function App() {
  const [products, setProducts] = useState({ Ropa:[], Zapatos: [], Accesorios: [] });

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Camiseta 1', description: 'Descripcion de la camiseta 1', price: '15.99', image: sampleImage, category: 'Ropa' },
      { id: 2, name: 'Camiseta 2', description: 'Descripcion de la camiseta 2', price: '19.99', image: sampleImage2, category: 'Ropa' },
      { id: 3, name: 'Camiseta 3', description: 'Descripcion de la camiseta 3', price: '29.99', image: sampleImage3, category: 'Ropa' },
      { id: 4, name: 'Zapatos 1', description: 'Descripcion de los Zapatos 1', price: '15.99', image: sampleImage4, category: 'Zapatos' },
      { id: 5, name: 'Zapatos 2', description: 'Descripcion de los Zapatos 2', price: '19.99', image: sampleImage5, category: 'Zapatos' },
      { id: 6, name: 'Zapatos 3', description: 'Descripcion de los Zapatos 3', price: '29.99', image: sampleImage6, category: 'Zapatos' },
      { id: 7, name: 'Accesorios 1', description: 'Descripcion de los Zapatos 3', price: '15.99', image: sampleImage7, category: 'Accesorios' },
      { id: 8, name: 'Accesorios 2', description: 'Descripcion de los Accesorios 3', price: '19.99', image: sampleImage8, category: 'Accesorios' },
      { id: 9, name: 'Accesorios 3', description: 'Descripcion de los Accesorios 3', price: '29.99', image: sampleImage9, category: 'Accesorios' },
    ]
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
