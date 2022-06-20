import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Item.css' 

const Item = ({ id, name, price, img }) => {
    return (
        <div className="item col-md-4">
            <Card style={{ width: '18rem', padding:'10px' }}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Precio: ${price}
                    </Card.Text>
                    <Link to={`/detalle/${id}`}>
                        <Button variant="primary">Ver mas detalles</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Item