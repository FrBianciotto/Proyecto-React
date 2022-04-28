import './navbar.css'
import logo from './logo.jpeg';

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
                </ul>
            </nav>

        </header>
    )
}

export default Navbar