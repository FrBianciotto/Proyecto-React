import './navbar.css'
import logo from './logo-negro.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from "react-router-dom"
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
                    <Nav className="me-auto navContainer">
                        <NavLink to='/' className='navbarLinks'>Nosotros</NavLink>
                        <NavDropdown className='navbarLinks' title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/categoria/fiambres">
                                    Fiambres
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/categoria/conservas">
                                    Conservas
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/categoria/box">
                                    Box
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to='/' className='navbarLinks'>Recetas</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <CartWidget/>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar