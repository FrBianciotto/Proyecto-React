import './navbar.css'
import logo from './logo-negro.png';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <header className='app-header'>
            <div className='containerLogo'>
                <img src={logo} className="logo" alt="logo" />
                <h1>Salumería artesanal</h1>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Recetas</a></li>
                    <CartWidget/>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar