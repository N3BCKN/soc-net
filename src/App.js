import React from 'react';
import './App.css';

//MODULES
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// COMPONENTS
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import LoginPanel from './components/login/LoginPanel';
import RegisterPanel from './components/register/RegisterPanel';
import MainBoard from './components/mainBoard/MainBoard';
import Profile from './components/profile/Profile';

class App extends React.Component {

  LoginContainer(){
    return(
      <React.Fragment>
        <Route exact path="/login" component={LoginPanel} />
        <Route exact path="/register" component={RegisterPanel} />
      </React.Fragment>
    )
  }

  DefaultContainer(){
     return(
      <React.Fragment>
      <Header />
        <Route exact path='/' render={() =>  <Redirect to='/main' /> } />
        <Route exact path='/main' component={MainBoard} />
        <Route exact path='/profile/:id' component={Profile}/>
      <Footer />
      </React.Fragment>
    )
  }
  
  render(){
     return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/(login)" component={this.LoginContainer}/>
            <Route component={this.DefaultContainer}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
