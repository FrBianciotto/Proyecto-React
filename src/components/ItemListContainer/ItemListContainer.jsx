import './ItemListContainer.css'
import ItemCount from '../ItemCount/Itemcount'

const ItemListContainer = ({greeting="Hola mundo"}) => {
  
  return (
    <div>
        <h2 className='titulo'>{greeting}</h2>
        <ItemCount stock={5} initial={1} onAdd={(cantidad)=>{ console.log(`Añadiste ${cantidad} productos al carrito`)}}/>
    </div>
  )
}

export default ItemListContainer