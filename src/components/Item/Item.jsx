import { Card, Button } from "react-bootstrap"
import ItemCount from "../ItemCount/Itemcount"

const Item = ({ id, categoria, nombre, precio, img }) => {
    return (
        <div className="item">
            
            <Card style={{ width: '18rem', padding:'10px' }}>
                <Card.Img variant="top" src={img} alt={nombre} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        Precio: ${precio}
                    </Card.Text>
                    <Button variant="primary">Ver mas detalles</Button>
                </Card.Body>
                <ItemCount stock={5} initial={1} onAdd={(cantidad)=>{ console.log(`Añadiste ${cantidad} productos al carrito`)}}/>
            </Card>

        </div>
    )
}

export default Item