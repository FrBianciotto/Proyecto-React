import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'
const CartWidget = () => {
    const {totalQuantity}=useCartContext();
    return (
        <div className="cart">
                <Link to='/cart'>
                    <span>
                        <i className="bi bi-cart4"></i>
                    </span>
                </Link>
                {totalQuantity() !== 0 && 
                <div className="cart-count">{totalQuantity()}</div>}
            </div>
    )
}
export default CartWidget