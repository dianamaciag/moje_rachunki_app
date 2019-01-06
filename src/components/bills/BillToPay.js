import React, { Component } from 'react'
import { deleteBill } from '../../store/actions/billsActions'
import { setBillInactive } from '../../store/actions/billsActions'
import { updatePaid } from '../../store/actions/summaryActions'
import { updateToPay } from '../../store/actions/summaryActions'
import { connect } from 'react-redux'

class BillToPay extends Component {

    handleDeleting = () => {

        const { bill, summary } = this.props

        this.props.deleteBill(bill.id);

        let summaryAmount = parseFloat(summary.toPay) - parseFloat(bill.value);

        this.props.updateToPay(summaryAmount.toFixed(2))
    }

    handleSetBillInactive = () => {

        const { bill, summary } = this.props

        this.props.setBillInactive(bill.id);

        let summaryAmountToPay = parseFloat(summary.toPay) - parseFloat(bill.value);
        let summaryPaidAmount = parseFloat(summary.paid) + parseFloat(bill.value);

        this.props.updatePaid(summaryPaidAmount.toFixed(2))
        this.props.updateToPay(summaryAmountToPay.toFixed(2))

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
        deleteBill: (id) => dispatch(deleteBill(id)),
        setBillInactive: (id) => dispatch(setBillInactive(id)),
        updatePaid: (amount) => dispatch(updatePaid(amount)),
        updateToPay: (amount) => dispatch(updateToPay(amount))
    }
}

export default connect(null, mapDispatchToProps)(BillToPay)

