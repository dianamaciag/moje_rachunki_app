import React, { Component } from 'react'
import { deleteBill } from '../../store/actions/billsActions'
import { setBillInactive } from '../../store/actions/billsActions'
import { connect } from 'react-redux'

class BillToPay extends Component {

    handleDeleting = () => {
        this.props.deleteBill(this.props.bill.id);
    }

    handleSetBillInactive = () => {
        this.props.setBillInactive(this.props.bill.id)
    }

    render() {

        const { bill } = this.props

        return (
            <div className="item my-2 py-2">
                <p>Nazwa płatności: <span>{bill.name}</span></p>
                <p>Kwota: <span>{bill.value}zł.</span></p>
                <p>Termin płatnosci: <span>{bill.date}</span> </p>

                <button onClick={this.handleSetBillInactive} className="btn btn-info mr-2">Zapłacone</button>
                <button onClick={this.handleDeleting} className="btn btn-info">Usuń</button>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBill: (bill) => dispatch(deleteBill(bill)),
        setBillInactive: (bill) => dispatch(setBillInactive(bill))
    }
}

export default connect(null, mapDispatchToProps)(BillToPay)

