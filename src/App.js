import React from 'react';
import './App.css';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import LoginPanel from './components/login/LoginPanel';
import RegisterPanel from './components/register/RegisterPanel';

class App extends React.Component {
  
  render(){
     return (
      <div className="App">
        <Header />
        <RegisterPanel />
        <Footer />
      </div>
    );
  }
}

export default App;
