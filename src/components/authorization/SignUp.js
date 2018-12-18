import React, { Component } from 'react'

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
        console.log(this.state)
    }

    render() {
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

                    <button type="submit" className="btn btn-info">Zarejestruj</button>
                </form>
            </div>
        )
    }
}

export default SignIn