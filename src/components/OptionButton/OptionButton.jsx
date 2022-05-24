import { Link } from 'react-router-dom'

const OptionButton = () => {
  return (
    <div className='optionButtons'>
        <Link to='/cart'>
            <button type="button" className="btn btn-primary">IR AL CARRITO</button>
        </Link>
        <Link to='/'>
            <button type="button" className="btn btn-primary">SEGUIR COMPRANDO</button>
        </Link>
    </div>
  )
}

export default OptionButton