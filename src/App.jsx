import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css' 
import NavBar from './components/navbar/Navbar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:id' element={<ItemListContainer/>}/>
            <Route path='/detalle/:detailId' element={<ItemDetailContainer />}/>
            
            <Route path='/*' element={<Navigate to='/'/>}/>
          </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;
