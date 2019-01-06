import React, { Component } from 'react'
import PaidBill from '../bills/PaidBill'

class Paid extends Component {

    render() {

        const { bills, date, summary } = this.props

        return (
            <div className="paid col-8 col-sm-6 col-md-4">
                <h4>Zapłacone</h4>
                <p className="value">
                    {summary ? summary[0].paid + ' zł' : 'przeliczanie...'}
                </p>
                {bills && bills.map(bill => {
                    if (!bill.active && summary) {
                        return (
                            <PaidBill bill={bill} key={bill.id} date={date} summary={summary[0]} />
                        )
                    } else return null
                })}
            </div>
        )
    }

}

export default Paid