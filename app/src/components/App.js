import React, { Component } from 'react';
//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Would you rather</h1>
          <div className="login-box"> 
              <p className="text-center">Login to play</p>
              <select className="form-control">
                <option disabled="disabled" selected>Choose a User</option>
                <option>User One</option>
                <option>User One</option>
                <option>User One</option>
              </select>
              <button className="btn-login form-control" type="submie">
                  Login
              </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
