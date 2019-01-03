import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authorizationActions'


const SignInLinks = (props) => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link text-white" to='/create'>Dodaj płatność</NavLink></li>
            <li className="nav-item"><button onClick={props.signOut} className="nav-link text-white logout">Wyloguj</button></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(SignInLinks)