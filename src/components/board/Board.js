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

        const { bills, authorization, user } = this.props;

        if (!authorization.uid) return <Redirect to='/signin' />


        return (
            <div className="board" >
                <div className='row justify-content-end mt-3'>
                    <div className="col-8">
                        {user.firstName ? <p className='user'> Zalogowano jako: <span className='text-info'> {user.firstName + ' ' + user.lastName} </span> </p> : null}
                    </div>
                </div>
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
        authorization: state.firebase.auth,
        user: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'bills',
            orderBy: ['date', 'asc']
        }
    ])
)(Board)


