import React from 'react';
import './App.css';

//MODULES
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {Provider} from 'react-redux';

// COMPONENTS
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import LoginPanel from './components/login/LoginPanel';
import RegisterPanel from './components/register/RegisterPanel';
import MainBoard from './components/main/MainBoard';
import SinglePost from './components/wall/SinglePost';
import ProfilePanel from './components/profile/ProfilePanel';
import MessageInbox from './components/conversations/MessageInbox';


class App extends React.Component {

  // LoginContainer(){
  //   return(
  //     <React.Fragment>
  //       {/*<Route exact path="/" render={() => <Redirect to="/login" />} />*/}
  //       <Route exact path="/login" component={LoginPanel} />
  //       <Route exact path="/register" component={RegisterPanel} />
  //     </React.Fragment>
  //   )
  // }

  // DefaultContainer(){
  //    return(
  //     <React.Fragment>
  //     <Header />
  //       <Route exact path='/' render={() =>  <Redirect to='/main' /> } />
  //       <Route exact path='/main' component={MainBoard} />
  //       <Route exact path='/profile/:id' component={ProfilePanel}/>
  //     <Footer />
  //     </React.Fragment>
  //   )
  // }
  
  render(){
     return (
      <Provider>
        <Router>
          <div className="App">
               <Header />
              <Switch>         
                 <Route exact path='/' render={() =>  <Redirect to='/main' /> } />
                 <Route exact path='/main' component={MainBoard} />
                 <Route exact path='/post/:id' component={SinglePost} />
                 <Route exact path='/profile/:id' component={ProfilePanel}/>
                 <Route exact path='/messages/' component={MessageInbox} />
                 <Route exact path="/login" component={LoginPanel} />
                 <Route exact path="/register" component={RegisterPanel} />
              </Switch>
               <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
