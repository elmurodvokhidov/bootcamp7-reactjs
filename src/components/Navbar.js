import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TiHome } from "react-icons/ti";
import { BsFillBoxFill } from "react-icons/bs";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ContextData } from '../context/Context';
import { RxCross2 } from "react-icons/rx";
import getUID from 'uid-generator-package';
import Swal from 'sweetalert2';

function NavbarComponent() {
    const {
        basket,
        like,
        user,
        loginModal,
        handleLoginModal,
        validate,
        getUser,
    } = useContext(ContextData);

    // Yangi foydalanuvchi
    const [newUser, setNewUser] = useState({
        id: "",
        username: "",
        password: ""
    });

    // Xatoliklarni ko'rsatuvchi state
    // ...

    // Input-dan olingan foydalanuvchi ma'lumotlari
    function getInputValue(e) {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    // Clear funksiyasi - Savol! Clear funksiyasi nima uchun kerak?
    function clear() {
        setNewUser({
            id: "",
            username: "",
            password: ""
        });
        // Xatoliklarni ko'rsatuvchi state-ni tozalash kerakmi?
        // ...
    };

    // Login funksiyasi
    function handleLogin() {
        console.log("Loged in...");
    };

    // Register funksiyasi
    function handleRegister() {
        console.log("Registered...");
    };

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
                        {
                            user ?
                                <NavLink to={'profile'}>Profile <FaUserAlt /></NavLink>
                                :
                                <>
                                    <Link onClick={handleLoginModal}>Login <FaUserAlt /></Link>
                                    {
                                        loginModal &&
                                        <div onClick={handleLoginModal} className="modal fade show loginModal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" style={{ paddingRight: "17px", display: "block" }}>
                                            <div onClick={(e) => e.stopPropagation()} className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Login to your account</h5>
                                                        <button type="button" className='btn btn-light' onClick={handleLoginModal}>
                                                            <span aria-hidden="true"><RxCross2 /></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <div className="form-group">
                                                                <label htmlFor="recipient-username" className="col-form-label">Username</label>
                                                                <input onInput={(e) => getInputValue(e)} type="text" name='username' className="form-control" id="recipient-username" />
                                                                {/* Xatolikarni ko'rsatuvchi element */}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="recipient-password" className="col-form-label">Password</label>
                                                                <input onInput={(e) => getInputValue(e)} type="text" name='password' className="form-control" id="recipient-password" />
                                                                {/* Xatolikarni ko'rsatuvchi element */}
                                                            </div>
                                                        </form>
                                                        {/* <p className='btn btn-link'>You don't have an account, create one!</p> */}
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button onClick={handleRegister} type="button" className="btn btn-success">Register</button>
                                                        <button onClick={handleLogin} type="button" className="btn btn-primary">Login</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;