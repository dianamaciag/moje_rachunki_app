import React, { Component } from 'react';
import Panel from './Panel'
import ToPay from './ToPay'
import Paid from './Paid'
import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'

class Board extends Component {

    render() {

        const { bills } = this.props;

        return (
            <div className="board" >
                <Panel />
                <div className="row justify-content-center my-5">
                    <ToPay bills={bills} />
                    <Paid />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        bills: state.bill.bills
    }
}

export default connect(mapStateToProps)(Board)


// firestoreConnect([
//     { collection: 'bills' }
// ])