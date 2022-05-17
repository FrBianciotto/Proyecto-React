import { Card, CardGroup } from 'react-bootstrap'
import ItemCount from '../ItemCount/Itemcount'
import './itemDetail.css'

const ItemDetail = ({ prod }) => {
  let { imagen, nombre, descripcion, stock, precio } = prod
  console.log(prod)
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
            <ItemCount  stock={stock} initial={1} onAdd={(cantidad)=>{ console.log(`Añadiste ${cantidad} productos al carrito`)}}/>
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