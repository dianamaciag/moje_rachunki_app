import React from 'react'

const BillToPay = ({ bill }) => {

    return (
        <div className="item my-2 py-2">
            <p>Nazwa płatności: <span>{bill.name}</span></p>
            <p>Kwota: <span>{bill.value}zł.</span></p>
            <p>Termin płatnosci: <span>{bill.date}</span> </p>

            <button className="btn btn-info mr-2">Zapłacone</button>
            <button className="btn btn-info">Usuń</button>
        </div>
    )


}

export default BillToPay

