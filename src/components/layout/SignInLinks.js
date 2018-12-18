import React from 'react';
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link text-white" to='/create'>Dodaj płatność</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to='/'>Wyloguj</NavLink></li>
        </ul>
    )
}


export default SignInLinks;