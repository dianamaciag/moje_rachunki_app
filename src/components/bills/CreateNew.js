import React, { Component } from 'react'
import { createNew } from '../../store/actions/billsActions'
import { connect } from 'react-redux'

class CreateNew extends Component {
    state = {
        name: '',
        value: '',
        date: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createNew(this.state)

    }

    render() {
        return (
            <div className="form d-flex align-items-center justify-content-center">
                <form onSubmit={this.handleSubmit} className="d-flex flex-column align-items-center">
                    <h2 className="mb-4 text-info">Dodaj nową płatność:</h2>

                    <div className="formgroup my-4">
                        <label htmlFor="name">Nazwa płatności: </label>
                        <input onChange={this.handleChange} type="text" id="name" className="form-control" />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="cost">Kwota: </label>
                        <input onChange={this.handleChange} type="number" className="form-control" id="value" />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="date">Termin płatności: </label>
                        <input onChange={this.handleChange} type="date" className="form-control" id="date" />
                    </div>

                    <button type="submit" className="btn btn-info">Dodaj</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNew: (bill) => dispatch(createNew(bill))
    }
}

export default connect(null, mapDispatchToProps)(CreateNew)