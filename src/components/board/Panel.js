import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Panel extends Component {

    render() {

        const { date } = this.props

        return (
            <div className='row mt-5 justify-content-center panel'>
                <div className="col-5">
                    <p className="date"> Dzisiaj jest: <span className="text-info ml-2">{`${date.day}.${date.month}`}</span></p>
                </div>
                <div className="col-5 d-flex align-items-center">
                    <Link to="/create"><button className="btn btn-info mr-4 ml-2">Dodaj płatność</button></Link>
                    <button className="btn btn-info">Resetuj płatności</button>
                </div>
            </div>
        )
    }

}


export default Panel