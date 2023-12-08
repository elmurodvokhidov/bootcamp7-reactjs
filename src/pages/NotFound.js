import { TbError404 } from "react-icons/tb";
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div className='notfound'>
            <h1><TbError404 /></h1>
            <NavLink to="/">If you want to back to the Home, please click here...</NavLink>
        </div>
    )
}

export default NotFound