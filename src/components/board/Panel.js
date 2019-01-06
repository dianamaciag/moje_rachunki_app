import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { setBillActive } from '../../store/actions/billsActions'
import { connect } from 'react-redux'
import { updatePaid } from '../../store/actions/summaryActions'
import { updateToPay } from '../../store/actions/summaryActions'


class Panel extends Component {

    handleResetBills = () => {
        let summaryAmountToPay = 0
        this.props.bills.map(bill => {
            this.props.setBillActive(bill.id)
            return summaryAmountToPay += parseFloat(bill.value)
        })
        this.props.updatePaid('0.00')
        this.props.updateToPay(summaryAmountToPay.toFixed(2))
    }

    render() {

        const { date } = this.props

        return (
            <div className='row mt-4 d-flex justify-content-center panel'>
                <div className="col-8 col-md-5">
                    <p className="date"> Dzisiaj jest: <span className="text-info ml-2">{`${date.day}.${date.month}`}</span></p>
                </div>
                <div className="w-100"></div>
                <div className="col-12 col-sm-8 col-md-6 d-flex buttons">
                    <div className='col-4'><Link to="/create"><button className="btn btn-info">Dodaj płatność</button></Link></div>
                    <div className='col-4'><button onClick={this.handleResetBills} className="btn btn-info">Resetuj płatności</button></div>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setBillActive: (id) => dispatch(setBillActive(id)),
        updatePaid: (amount) => dispatch(updatePaid(amount)),
        updateToPay: (amount) => dispatch(updateToPay(amount))
    }
}


export default connect(null, mapDispatchToProps)(Panel)