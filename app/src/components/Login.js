import React, { Component } from 'react'


class Login extends Component {
    render() {
      return (
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
      );
    }
  }
  
  export default Login;