import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [product, setProduct]= useState([])
    const [loading, setLoading]= useState(true)
    const {detailId}=useParams()
    useEffect(()=>{
        getFetch(detailId)
        .then(res=> setProduct(res))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    },[detailId])
    return (
      <div>
          {loading ? <Loader/> : <ItemDetail prod={product}/>}
      </div>
    )
}

export default ItemDetailContainer