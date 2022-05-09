import { useState } from "react"
import './ItemCount.css'
const ItemCount = ({ stock, initial, onAdd }) => {
    const [cant, setCant] = useState(initial)
    function increment() {
        if (cant < stock) {
            setCant(cant + 1);
        }
    }
    function decrement() {
        if (cant > 1) {
            setCant(cant - 1);
        }
    }
    function addToCart(){
        onAdd(cant)
    }
    return (
        <section className="itemCount">
            <div className="itemCount-cant">
                <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                <span>{cant}</span>
                <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={addToCart}>AÑADIR AL CARRITO</button>
        </section>
    )
}

export default ItemCount