import './navbar.css'
import logo from './logo-negro.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className='app-header'>
            <Container>
                <Link to='/'>
                    <Navbar.Brand className='containerLogo'> 
                            <img src={logo} className="logo" alt="logo" />
                            <h1>Salumería artesanal</h1>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='navbarLinks'>Nosotros</Nav.Link>
                        <NavDropdown className='navbarLinks' title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='navbarLinks'>Recetas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <CartWidget/>
                </Nav>
            </Container>
        </Navbar>

        // <header className='app-header'>
        //     <Link to='/'>
        //         <div className='containerLogo'>
        //             <img src={logo} className="logo" alt="logo" />
        //             <h1>Salumería artesanal</h1>
        //         </div>
        //     </Link>
        //     <nav className='navbar'>
        //         <ul>
        //             <li><a href="/">Nosotros</a></li>
        //             <li><a href="/">Productos</a></li>
        //             <li><a href="/">Recetas</a></li>
        //             <CartWidget/>
        //         </ul>
        //     </nav>

        // </header>
    )
}

export default NavBar