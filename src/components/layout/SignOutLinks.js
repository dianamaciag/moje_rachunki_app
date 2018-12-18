import React from 'react';
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link text-white" to='/signup'>Rejestracja</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to='/signin'>Zaloguj</NavLink></li>
        </ul>
    )
}


export default SignOutLinks;