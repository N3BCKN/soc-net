import React from 'react';
import './App.css';

//MODULES
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// COMPONENTS
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import LoginPanel from './components/login/LoginPanel';
import RegisterPanel from './components/register/RegisterPanel';
import MainBoard from './components/main/MainBoard';
import SinglePost from './components/wall/SinglePost';
import ProfilePanel from './components/profile/ProfilePanel';
import EditProfile from './components/profile/edit/EditProfile';
import MessageInbox from './components/conversations/MessageInbox';
import ProtectedRoute from './components/shared/ProtectedRoute';

import AuthService from './services/auth-service';

// REDUX
import {Provider} from 'react-redux';
import * as actions from './actions';
const store = require('./reducers/').init();


class App extends React.Component {

  constructor() {
    super();
  
      this.state = {
      loggedIn: false
      };

      this.checkUserAuth = this.checkUserAuth.bind(this);
      this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount(){
      this.checkUserAuth();
  }

  checkUserAuth(){
    const loggedUser = AuthService.isAuthenticated();
    if(loggedUser){
    store.dispatch(actions.loginSuccess());
    this.setState({loggedIn: true});
    }
  }


  logoutUser(){
    store.dispatch(actions.logout());
    this.setState({loggedIn: false});
  }

  renderAuthContent(){
    if(this.state.loggedIn){
      return(
          <React.Fragment>
          <Header handleLogout={this.logoutUser} />
          <Route exact path='/' render={() =>  <Redirect to='/main' /> } />
          <Route exact path='/main' component={MainBoard} />
          <Route exact path='/post/:id' component={SinglePost} />
          <Route exact path='/profile/:id' component={ProfilePanel}/>
          <Route exact path='/edit/profile' component={EditProfile}/>
          <Route exact path='/messages/' component={MessageInbox} />
          <Redirect to="/main" />
          <Footer />
          </React.Fragment>
        )
    }
    else{
      return(
          <React.Fragment>
          <Route exact path="/login" component={LoginPanel} />
          <Route exact path="/register" component={RegisterPanel} />
          <Redirect to="/login" />
          </React.Fragment>
        )
    }
  }
  
  render(){
     return (
      <Provider store={store}>
        <Router>
          <div className="App">
              <Switch>         
                {this.renderAuthContent()}
              </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
