import React from 'react'
import BillToPay from '../bills/BillToPay'

const ToPay = ({ bills }) => {

    return (
        <div className="topay col-4 mr-3">
            <h4>Do zapłacenia</h4>
            <p className="value">650zł</p>
            {bills && bills.map(bill => {
                return (
                    <BillToPay bill={bill} key={bill.id} />
                )
            })}

        </div>
    )

}

export default ToPay