import { Link } from 'react-router-dom'
import logoEmptyCart from './emptyCart.svg'
import './EmptyCart.css'
const EmptyCart = () => {
  return (
    <div className='emptyCart'>
          <h4>Su carro está vacío.</h4>
          <img className='imgCart' src={logoEmptyCart} alt="Carrito vacío" />
          <Link to='/'>
            <button className='btn btn-outline-secondary'>Ir a comprar</button>
          </Link>
    </div>
  )
}

export default EmptyCart