import React from 'react';
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link className="navbar-brand text-white " to='/'><i className="fas fa-money-bill"></i> Moje Rachunki <i className="fas fa-money-bill"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SignInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}

export default Navbar