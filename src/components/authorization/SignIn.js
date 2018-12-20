import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authorizationActions'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        this.props.history.push('/')

    }

    render() {

        const { authorizationError, authorization } = this.props

        if (authorization.uid) return <Redirect to='/' />

        return (
            <div className="form d-flex align-items-center justify-content-center">
                <form onSubmit={this.handleSubmit} className="d-flex flex-column align-items-center">
                    <h2 className="mb-4 text-info">Logowanie</h2>
                    <div className="formgroup my-4">
                        <label htmlFor="email">Adres email: </label>
                        <input onChange={this.handleChange} type="email" id="email" className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password">Hasło: </label>
                        <input onChange={this.handleChange} type="password" className="form-control" id="password" />
                    </div>

                    <div className="text-info mb-2">
                        {authorizationError ? <p>{authorizationError}</p> : null}
                    </div>

                    <button type="submit" className="btn btn-info">Zaloguj</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authorizationError: state.authorization.authorizationError,
        authorization: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credential) => dispatch(signIn(credential))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)