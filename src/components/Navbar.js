import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TiHome } from "react-icons/ti";
import { BsFillBoxFill } from "react-icons/bs";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ContextData } from '../context/Context';

function NavbarComponent() {
    const {
        basket,
        like
    } = useContext(ContextData);

    return (
        <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0" style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", zIndex: "50" }}>
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}><img style={{ width: '70px' }} src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="..." /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='flex-grow-0'>
                    <Nav className="me-auto gap-4" style={{ width: "fit-content" }}>
                        <NavLink to="/">Home <TiHome /></NavLink>
                        <NavLink to="product">Product <BsFillBoxFill /></NavLink>
                        <NavLink to="likes">Likes <FaHeart /><span className='showLength likeLength'>{like.length}</span></NavLink>
                        <NavLink to="basket">Basket <FaCartShopping /><span className='showLength'>{basket.length}</span></NavLink>
                        <NavLink to="profile">Profile <FaUserAlt /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;