import React, { Component } from 'react'
import { deleteBill } from '../../store/actions/billsActions'
import { setBillActive } from '../../store/actions/billsActions'
import { connect } from 'react-redux'

class PaidBill extends Component {

    handleDeleting = () => {
        this.props.deleteBill(this.props.bill.id);
    }

    handleSetBillActive = () => {
        this.props.setBillActive(this.props.bill.id)
    }

    render() {

        const { bill } = this.props

        return (
            <div className="item my-2 py-2">
                <p>Nazwa płatności: <span className="name">{bill.name}</span></p>
                <p>Kwota: <span className="cost">{bill.value} zł.</span></p>
                <p>Zapłacono: <span className="date">Data klikniecia zaplacone</span> </p>

                <button onClick={this.handleSetBillActive} className="btn btn-info mr-2">Cofnij płatność</button>
                <button onClick={this.handleDeleting} className="btn btn-info">Usuń</button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBill: (bill) => dispatch(deleteBill(bill)),
        setBillActive: (bill) => dispatch(setBillActive(bill))
    }
}

export default connect(null, mapDispatchToProps)(PaidBill)