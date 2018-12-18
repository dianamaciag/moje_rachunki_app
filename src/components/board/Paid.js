import React from 'react'
import PaidBill from '../bills/PaidBill'
const Paid = () => {

    return (
        <div className="paid col-4">
            <h4>Zapłacone</h4>
            <p className="value">1150zł</p>
            <PaidBill />
        </div>
    )

}

export default Paid