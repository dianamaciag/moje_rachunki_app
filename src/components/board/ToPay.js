import React, { Component } from 'react'
import BillToPay from '../bills/BillToPay'

class ToPay extends Component {

    render() {

        const { bills, date, summary } = this.props

        return (
            <div className="topay col-8 col-sm-6 col-md-4">
                <h4>Do zapłacenia</h4>
                <p className="value">
                    {summary ? summary[0].toPay + ' zł' : 'przeliczanie...'}
                </p>
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