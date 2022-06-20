import { useCartContext } from '../../context/CartContext'

import CartList from '../../components/CartList/CartList'
import EmptyCart from '../../components/EmptyCart/EmptyCart'

const Cart = () => {
  const { cartList } = useCartContext()
  return (
    <div>
      <h2> Detalle del Carrito</h2>
      {cartList.length ? (
        <CartList/>
      ) : (
        <EmptyCart/>
      )}

    </div>
  )
}

export default Cart