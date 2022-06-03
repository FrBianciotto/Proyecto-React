import Item from "../Item/Item"
import './ItemList.css'
const ItemList = ({products}) => {
  return (
    <div className="itemList">
        {products.map(product=>
            <Item key={product.id} id={product.id}  nombre={product.name} precio={product.price} img={product.image}/> 
        )}
    </div>
  )
}

export default ItemList