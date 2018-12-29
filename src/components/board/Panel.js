import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { setBillActive } from '../../store/actions/billsActions'
import { connect } from 'react-redux'


class Panel extends Component {

    handleResetBills = () => {
        this.props.bills.map(bill => this.props.setBillActive(bill.id))
    }

    render() {

        const { date } = this.props

        return (
            <div className='row mt-5 justify-content-center panel'>
                <div className="col-5">
                    <p className="date"> Dzisiaj jest: <span className="text-info ml-2">{`${date.day}.${date.month}`}</span></p>
                </div>
                <div className="col-5 d-flex align-items-center">
                    <Link to="/create"><button className="btn btn-info mr-4 ml-2">Dodaj płatność</button></Link>
                    <button onClick={this.handleResetBills} className="btn btn-info">Resetuj płatności</button>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setBillActive: (bill) => dispatch(setBillActive(bill))
    }
}


export default connect(null, mapDispatchToProps)(Panel)