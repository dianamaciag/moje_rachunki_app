import React, { Component } from 'react'
import { deleteBill } from '../../store/actions/billsActions'
import { setBillInactive } from '../../store/actions/billsActions'
// import { updateSummary } from '../../store/actions/summaryActions'
import { connect } from 'react-redux'

class BillToPay extends Component {

    handleDeleting = () => {

        this.props.deleteBill(this.props.bill.id);
    }

    handleSetBillInactive = () => {

        this.props.setBillInactive(this.props.bill.id)
    }

    render() {

        const { bills, bill, date } = this.props

        const currentDay = parseInt(date.day)

        const paymentDay = parseInt(bill.date.substr(8))

        return (
            <div className="item my-2 py-2" style={currentDay >= paymentDay ? { border: '2px solid red' } : null} >
                <p>Nazwa płatności: <span>{bill.name}</span></p>
                <p>Kwota: <span>{bill.value}zł.</span></p>
                <p>Termin płatności: <span>{bill.date}</span> </p>

                <button onClick={() => this.handleSetBillInactive(bills)} className="btn btn-info mr-2">Zapłacone</button>
                <button onClick={this.handleDeleting} className="btn btn-info">Usuń</button>
            </ div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBill: (bill) => dispatch(deleteBill(bill)),
        setBillInactive: (bill) => dispatch(setBillInactive(bill)),
    }
}

export default connect(null, mapDispatchToProps)(BillToPay)

