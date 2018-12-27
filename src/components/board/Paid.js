import React from 'react'
import PaidBill from '../bills/PaidBill'
const Paid = ({ bills }) => {

    return (
        <div className="paid col-4">
            <h4>Zapłacone</h4>
            <p className="value">... zł</p>
            {bills && bills.map(bill => {
                if (!bill.active) {
                    return (
                        <PaidBill bill={bill} key={bill.id} />
                    )
                } else return null
            })}
        </div>
    )

}

export default Paid