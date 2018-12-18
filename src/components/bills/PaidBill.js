import React, { Component } from 'react'

class PaidBill extends Component {
    state = {

    }

    render() {
        return (
            <div className="item my-2 py-2">
                <p>Nazwa płatności: <span className="name">Przedszkole</span></p>
                <p>Kwota: <span className="cost">134,30zł.</span></p>
                <p>Zapłacono: <span className="date">10.12</span> </p>

                <button className="btn btn-info mr-2">Cofnij płatność</button>
                <button className="btn btn-info">Usuń</button>
            </div>
        )
    }

}

export default PaidBill