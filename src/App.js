import React from "react";
import NavBar from '../src/components/NavBar';
import ItemListContainer from "./components/ItemListContainer";


function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="¡Bienvenido a nuestra tienda en línea!"/>
    </div>
  );
}

export default App;
