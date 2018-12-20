import React, { Component } from 'react';
import Panel from './Panel'
import ToPay from './ToPay'
import Paid from './Paid'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Board extends Component {

    render() {

        const { bills, authorization } = this.props;

        if (!authorization.uid) return <Redirect to='/signin' />


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
    return {
        bills: state.firestore.ordered.bills,
        authorization: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'bills' }
    ])
)(Board)


