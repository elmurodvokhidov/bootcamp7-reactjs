import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
        <ul className='flex justify-around bg-slate-500 py-4 rounded-b-xl text-2xl text-slate-400'>
            <li><NavLink to={"/"}>Bosh sahifa</NavLink></li>
            <li><NavLink to={"create-new"}>Yangi qo'shish</NavLink></li>
        </ul>
    )
};