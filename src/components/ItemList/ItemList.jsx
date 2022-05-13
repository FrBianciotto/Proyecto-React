import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className="itemList d-flex">
        {productos.map(producto=>
            <Item key={producto.id} id={producto.id} categoria={producto.categoria} nombre={producto.nombre} precio={producto.precio} img={producto.imagen}/> 
        )}
    </div>
  )
}

export default ItemList