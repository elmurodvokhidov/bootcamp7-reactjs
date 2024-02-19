import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'profile'}>Profile</NavLink>
        </div>
    )
}

export default Navbar