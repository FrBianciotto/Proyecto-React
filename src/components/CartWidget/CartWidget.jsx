import './CartWidget.css'
const CartWidget = () => {
    return (
        <li>
            <div className="cart">
                <span>
                    <i className="bi bi-cart4"></i>
                </span>
                <div className="cart-count">0</div>
            </div>
        </li>
    )
}
export default CartWidget