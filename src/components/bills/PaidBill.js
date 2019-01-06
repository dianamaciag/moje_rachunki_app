import React, { Component } from 'react'
import { deleteBill } from '../../store/actions/billsActions'
import { setBillActive } from '../../store/actions/billsActions'
import { connect } from 'react-redux'
import { updatePaid } from '../../store/actions/summaryActions'
import { updateToPay } from '../../store/actions/summaryActions'

class PaidBill extends Component {

    handleDeleting = () => {

        const { bill, summary } = this.props

        this.props.deleteBill(bill.id);

        let summaryAmount = parseFloat(summary.paid) - parseFloat(bill.value);

        this.props.updatePaid(summaryAmount.toFixed(2))
    }

    handleSetBillActive = () => {

        const { bill, summary } = this.props

        this.props.setBillActive(bill.id)

        let summaryAmountToPay = parseFloat(summary.toPay) + parseFloat(bill.value);
        let summaryPaidAmount = parseFloat(summary.paid) - parseFloat(bill.value);

        this.props.updatePaid(summaryPaidAmount.toFixed(2))
        this.props.updateToPay(summaryAmountToPay.toFixed(2))

    }

    render() {

        const { bill, date } = this.props

        return (
            <div className="item my-2 py-2">
                <p>Nazwa płatności: <span className="name">{bill.name}</span></p>
                <p>Kwota: <span className="cost">{bill.value} zł.</span></p>
                <p>Zapłacono: <span className="date">{`${date.year}-${date.month}-${date.day}`}</span> </p>

                <button onClick={this.handleSetBillActive} className="btn btn-info mr-2">Cofnij płatność</button>
                <button onClick={this.handleDeleting} className="btn btn-info">Usuń</button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBill: (id) => dispatch(deleteBill(id)),
        setBillActive: (id) => dispatch(setBillActive(id)),
        updatePaid: (amount) => dispatch(updatePaid(amount)),
        updateToPay: (amount) => dispatch(updateToPay(amount)),
    }
}

export default connect(null, mapDispatchToProps)(PaidBill)