import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const Cart = () => {
  const { totalPrice, cartList, clearCart, deleteItem, buy} = useCartContext()
  return (
    <div>
      <h2> Detalle del Cart...</h2>
      {cartList.length ? (
        <div>
          {cartList.map((product) =>(
            <div key={product.id}>
              <li>
                {`Producto: ${product.name} -Precio: ${product.price} - Cantidad: ${product.cantidad} `}
                <button className="delete-button btn btn" onClick={() => deleteItem(product.id)}>
                  <i class="bi bi-trash"></i>
                </button>
              </li>
            </div>
          ))}
          <p>Precio final: {totalPrice()}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={buy}>Finalizar compra</button>
        </div>
      ) : (
        <div className='emptyCart'>
          <h4>Su carro está vacío.</h4>
          <Link to='/'>
            <button>Ir a comprar</button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default Cart