import React, { Component } from 'react'
import PaidBill from '../bills/PaidBill'

class Paid extends Component {

    render() {



        const { bills, paidAmount, date } = this.props

        return (
            <div className="paid col-4">
                <h4>Zapłacone</h4>
                <p className="value"> {paidAmount} zł</p>
                {bills && bills.map(bill => {
                    if (!bill.active) {
                        return (
                            <PaidBill bill={bill} key={bill.id} date={date} />
                        )
                    } else return null
                })}
            </div>
        )
    }

}

export default Paid