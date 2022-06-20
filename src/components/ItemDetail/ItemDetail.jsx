import { useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import swal from 'sweetalert'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/Itemcount'
import OptionButton from '../OptionButton/OptionButton'
import './itemDetail.css'

const ItemDetail = ({ prod }) => {
  const [inputType, setImputType] = useState('itemCount')
  const {addToCart} = useCartContext()
  let { image, name, description, stock, price } = prod

  /* OnAdd is a function that takes a quantity as an argument and returns a sweet alert message with the quantity and name of the product added to the cart. */
  const onAdd = (quantity) => {
    swal("¡Producto Cargado!", `Añadiste ${quantity} ${name} al carrito`, "success")
    addToCart({...prod, quantity: quantity})
  }
  function handleInputType() {
    setImputType('buyButtons')
  }

  return (
    <>
      <h2 className='mt-3'>Item Detail</h2>
      <CardGroup className='mt-5 card-detail'>
        <Card className='d-flex align-items-center'>
          <img className='img' src={image} alt={name} />
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
              <p>Precio: ${price}</p>
            </Card.Text>
            {inputType === 'itemCount' ? (
              <ItemCount
                stock={stock}
                initial={1}
                onAdd={onAdd}
                handleInputType={handleInputType}
              />
            ) : (
              <OptionButton/>
            )}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Cantidad en Stock: {stock}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  )
}

export default ItemDetail