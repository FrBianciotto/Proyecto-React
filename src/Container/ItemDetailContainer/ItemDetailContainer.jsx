import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader'


const ItemDetailContainer = () => {
    const [product, setProduct]= useState([])
    const [loading, setLoading]= useState(true)
    const {detailId}=useParams()
    
 
    useEffect(()=>{
        const db = getFirestore()
        const dbQuery=doc(db, 'items', detailId)
        getDoc(dbQuery)
        .then(res=> setProduct( { id: res.id, ...res.data() } ) )
        .catch(err=> console.log(err))
        .finally(setLoading(false))
    }, [detailId])
    
    return (
      <div>
          {loading ? <Loader/> : <ItemDetail prod={product}/>}
      </div>
    )
}

export default ItemDetailContainer