import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import Loader from "../../components/Loader/Loader"
import { getFetch } from "../../helpers/getFetch"
import './ItemListContainer.css'


const ItemListContainer = () => {
  const [productos, setProductos]= useState([])
  const [loading, setLoading]= useState(true)
  const {id}= useParams()
  

  useEffect(()=>{
    if (id) {
      setLoading(true)
      getFetch()
      .then(res=> setProductos(res.filter((product)=>product.categoria === id)))
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false))
    } else {
      setLoading(true)
      getFetch()
      .then(res=> setProductos(res))
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false))
    }
  },[id])
  return (
    <div>
        <h2 className='titulo'>Productos</h2>
        {loading ? <Loader/> : <ItemList productos={productos}/>} 
        
    </div>
  )
}

export default ItemListContainer