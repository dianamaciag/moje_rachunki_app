import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Board from './components/board/Board'
import Footer from './components/layout/Footer'
import SignIn from './components/authorization/SignIn'
import SignUp from './components/authorization/SignUp'
import CreateNew from './components/bills/CreateNew'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container d-flex flex-column">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Board} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateNew} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
