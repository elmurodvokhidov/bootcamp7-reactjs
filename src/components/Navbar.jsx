import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { authLogout } from "../redux/slice/authSlice";

function Navbar() {
    const { auth, isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(authLogout());
        navigate("/admin-panel");
    };

    return (
        <div>
            {!isLoggedIn ?
                <div>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'profile'}>Profile</NavLink>
                </div> :
                <div>
                    <NavLink to={'/admin-panel/profile'}>{auth.fName}</NavLink>
                    <button onClick={handleLogout} className="text-white bg-red-500">Logout</button>
                </div>}
        </div>
    )
}

export default Navbar