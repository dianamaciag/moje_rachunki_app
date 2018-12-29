import React, { Component } from 'react'
import BillToPay from '../bills/BillToPay'

class ToPay extends Component {

    render() {

        const { bills, toPayAmount, date } = this.props

        return (
            <div className="topay col-4 mr-3">
                <h4>Do zapłacenia</h4>
                <p className="value"> {toPayAmount} zł.</p>
                {bills && bills.map(bill => {
                    if (bill.active) {
                        return (
                            <BillToPay bill={bill} key={bill.id} date={date} />
                        )
                    } else return null
                })}
            </div>
        )
    }

}

export default ToPay