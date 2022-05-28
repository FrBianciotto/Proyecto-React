import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const Cart = () => {
  const { cartList, clearCart, deleteItem} = useCartContext()
  console.log(cartList)
  return (
    <div>
      <h2> Detalle del Cart...</h2>
      {cartList.length ? (
        <div>
          {cartList.map((product) =>(
            <div key={product.id}>
              <li>
                {`Producto: ${product.nombre} -Precio: ${product.precio} - Cantidad: ${product.cantidad} `}
                <button className="delete-button" onClick={() => deleteItem(product.id)}>Eliminar Producto</button>
              </li>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar carrito</button>
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