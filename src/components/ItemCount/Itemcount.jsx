import { useState } from "react"
import './ItemCount.css'
const ItemCount = ({ stock, initial, onAdd, handleInputType }) => {
    const [quantity, setQuantity] = useState(initial)
    function increment() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }
    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    function addToCart(){
        onAdd(quantity);
        handleInputType();
    }
    return (
        <section className="itemCount">
            <div className="itemCount-cant">
                <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                <span>{quantity}</span>
                <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={addToCart}>AÑADIR AL CARRITO</button>
        </section>
    )
}

export default ItemCount