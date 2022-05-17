import { useState, useEffect } from "react"
import ItemList from "../../components/ItemList/ItemList"
import Loader from "../../components/Loader/Loader"
import { getFetch } from "../../helpers/getFetch"
import './ItemListContainer.css'

// let listaProductos = [
//   {id: 0 ,categoria: 'fiambre', nombre: 'bondiola', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/f1MmyqL/Bondiola.jpg'},
//   {id: 1 ,categoria: 'fiambres', nombre: 'solomillo', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/7RwNMFp/Solomillo.jpg'},
//   {id: 2 ,categoria: 'fiambre', nombre: 'lomito ahumado', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/199kHMv/Lomito-Ahumado.jpg'},
//   {id: 3 ,categoria: 'conservas', nombre: 'tomates secos', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/c6ZbWWd/Tomates-Secos.jpg'},
//   {id: 4 ,categoria: 'conservas', nombre: 'escabeche de berenjena', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/yRFbbQB/Escabeche-Berenjenas.jpg'},
//   {id: 5 ,categoria: 'box', nombre: 'picada clasica', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/v4CYdF3/picada-Clasica.jpg'}
// ]
const ItemListContainer = () => {
  const [productos, setProductos]= useState([])
  const [loading, setLoading]= useState(true)
  
  // const getProducts= new Promise((res)=>{
  //     setTimeout(()=>{
  //         res(listaProductos);
  //     },2000)
  // })    

  useEffect(()=>{
      getFetch()
      .then(res=> setProductos(res))
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false))
  },[])
  return (
    <div>
        <h2 className='titulo'>Productos</h2>
        {loading ? <Loader/> : <ItemList productos={productos}/>} 
        
    </div>
  )
}

export default ItemListContainer