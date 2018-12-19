import React from 'react';
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {

    const { authorization } = props

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link className="navbar-brand text-white " to='/'><i className="fas fa-money-bill"></i> Moje Rachunki <i className="fas fa-money-bill"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {authorization.uid ? <SignInLinks /> : <SignOutLinks />}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        authorization: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)