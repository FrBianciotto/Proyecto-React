import './CartWidget.css'
const CartWidget = () => {
    return (
        <li>
            <a href="/" className="cart">
                <span>
                    <i className="bi bi-cart4"></i>
                </span>
                <div className="cart-count">0</div>
            </a>
        </li>
    )
}
export default CartWidget