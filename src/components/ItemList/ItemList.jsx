import Item from "../Item/Item"
import './ItemList.css'
const ItemList = ({products}) => {
  return (
    <div className="itemList">
        {/* Mapping through the products array and returning an Item component for each product. */}
        {products.map(product=>
            <Item key={product.id} id={product.id}  name={product.name} price={product.price} img={product.image}/> 
        )}
    </div>
  )
}

export default ItemList