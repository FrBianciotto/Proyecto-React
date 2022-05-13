// import {} from 'React'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting="Bienvenidos"/>
    </div>
  );
}

export default App;
