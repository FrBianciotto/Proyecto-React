import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import Loader from "../../components/Loader/Loader"
// import { getFetch } from "../../helpers/getFetch"
import './ItemListContainer.css'

import{collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  const [products, setProducts]= useState([])
  const [loading, setLoading]= useState(true)
  const {id}= useParams()
  
  useEffect(()=>{
    setLoading(true)
    const db= getFirestore()
    const querryCollection = collection(db, 'items')
    const querryCollectionFilter = id ? query(querryCollection, where('category' , '==' , id)) :querryCollection
    getDocs(querryCollectionFilter)
    .then(res=>setProducts(res.docs.map(product=> ( {id: product.id, ...product.data() } ) ) ) )
    .catch(err=> console.log(err))
    .finally(setLoading(false))
  },[id])

  // useEffect(()=>{
  //   if (id) {
  //     setLoading(true)
  //     getFetch()
  //     .then(res=> setProductos(res.filter((product)=>product.categoria === id)))
  //     .catch((err)=>console.log(err))
  //     .finally(()=>setLoading(false))
  //   } else {
  //     setLoading(true)
  //     getFetch()
  //     .then(res=> setProductos(res))
  //     .catch((err)=>console.log(err))
  //     .finally(()=>setLoading(false))
  //   }
  // },[id])
  return (
    <div>
        <h2 className='titulo'>Productos</h2>
        {loading ? <Loader/> : <ItemList products={products}/>} 
        
    </div>
  )
}

export default ItemListContainer