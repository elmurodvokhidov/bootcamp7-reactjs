import React from 'react'
import { useSelector } from 'react-redux'
import spiralImg from "../../public/img/spiral.avif";

function AdminProfile() {
    const { auth } = useSelector(state => state.auth);

    return (
        <div>
            {
                auth ?
                    <h1>Hello, {auth.fName} {auth.lName} 👋</h1>
                    :
                    <img className='m-auto w-64 h-64 object-cover rounded-full animate-spin' src={spiralImg} alt="spiral" />
            }
        </div>
    )
}

export default AdminProfile