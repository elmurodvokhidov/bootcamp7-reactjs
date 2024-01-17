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
import { RxCross2 } from "react-icons/rx";

function NavbarComponent() {
    const {
        basket,
        like,
        user,
        loginModal,
        handleLoginModal,
        dropdown,
        handleDropdown,
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
                        {
                            user ?
                                <>
                                    <Link onClick={handleDropdown}>Profile <FaUserAlt /></Link>
                                    {
                                        dropdown &&
                                        <ul className='customDropdown' style={{ listStyle: "none" }}>
                                            <li>Account</li>
                                            <li>Orders</li>
                                            <li>Logout</li>
                                        </ul>
                                    }
                                </>
                                :
                                <>
                                    <Link onClick={handleLoginModal}>Login <FaUserAlt /></Link>
                                    {
                                        loginModal &&
                                        <div onClick={handleLoginModal} class="modal fade show loginModal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style={{ paddingRight: "17px", display: "block" }}>
                                            <div onClick={(e) => e.stopPropagation()} class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Login to your account</h5>
                                                        <button type="button" className='btn btn-light' onClick={handleLoginModal}>
                                                            <span aria-hidden="true"><RxCross2 /></span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="form-group">
                                                                <label for="recipient-username" class="col-form-label">Username</label>
                                                                <input type="text" class="form-control" id="recipient-username" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="recipient-password" class="col-form-label">Password</label>
                                                                <input type="text" class="form-control" id="recipient-password" />
                                                            </div>
                                                        </form>
                                                        {/* <p className='btn btn-link'>You don't have an account, create one!</p> */}
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-primary">Login</button>
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