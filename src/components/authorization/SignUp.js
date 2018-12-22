import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authorizationActions'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)


    }

    render() {

        const { authorization, authorizationError } = this.props

        if (authorization.uid) return <Redirect to='/' />

        return (
            <div className="form d-flex align-items-center justify-content-center">
                <form onSubmit={this.handleSubmit} className="d-flex flex-column align-items-center">
                    <h2 className="mb-4 text-info">Rejestracja</h2>

                    <div className="formgroup my-2">
                        <label htmlFor="firstName">Imię: </label>
                        <input onChange={this.handleChange} type="text" id="firstName" className="form-control" />
                    </div>

                    <div className="formgroup my-2">
                        <label htmlFor="lastName">Nazwisko: </label>
                        <input onChange={this.handleChange} type="text" id="lastName" className="form-control" />
                    </div>

                    <div className="formgroup my-2">
                        <label htmlFor="email">Adres email: </label>
                        <input onChange={this.handleChange} type="email" id="email" className="form-control" />
                    </div>

                    <div className="form-group mb-5">
                        <label htmlFor="password">Hasło: </label>
                        <input onChange={this.handleChange} type="password" className="form-control" id="password" />
                    </div>

                    <div className='mb-2'>
                        {authorizationError ? <p> {authorizationError}</p> : null}
                    </div>

                    <button type="submit" className="btn btn-info">Zarejestruj</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authorization: state.firebase.auth,
        authorizationError: state.authorization.authorizationError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)