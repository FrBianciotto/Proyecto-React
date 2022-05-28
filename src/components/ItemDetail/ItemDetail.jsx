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
  let { imagen, nombre, descripcion, stock, precio } = prod

  const onAdd = (quantity) => {
    swal("¡Producto Cargado!", `Añadiste ${quantity} ${nombre} al carrito`, "success")
    addToCart({...prod, cantidad: quantity})
  }
  function handleInputType() {
    setImputType('buyButtons')
  }

  return (
    <>
      <h2 className='mt-3'>Item Detail</h2>
      <CardGroup className='mt-5'>
        <Card className='d-flex align-items-center'>
          <Card.Img className='img' src={imagen} />
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              {descripcion}
              <p>Precio: ${precio}</p>
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