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

function NavbarComponent() {
    const {
        basket,
        like,
        currentUser,
        loginModal,
        handleLoginModal,
        errorState,
        handleLogin,
        handleRegister,
        getUserValue,
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
                        <NavLink to="product">Products <BsFillBoxFill /></NavLink>
                        <NavLink to="likes">Favorite <FaHeart /><span className='showLength likeLength'>{like.length}</span></NavLink>
                        <NavLink to="basket">Cart <FaCartShopping /><span className='showLength'>{basket.length}</span></NavLink>
                        {
                            Object.keys(currentUser).length > 0 ?
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
                                                                <input onInput={(e) => getUserValue(e)} type="text" name='username' className="form-control" id="recipient-username" />
                                                                {/* Xatolikarni ko'rsatuvchi element */}
                                                                <p className='text-danger'>{errorState?.username}</p>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="recipient-password" className="col-form-label">Password</label>
                                                                <input onInput={(e) => getUserValue(e)} type="text" name='password' className="form-control" id="recipient-password" />
                                                                {/* Xatolikarni ko'rsatuvchi element */}
                                                                <p className='text-danger'>{errorState?.password}</p>
                                                            </div>
                                                        </form>
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