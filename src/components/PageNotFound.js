import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class PageNotFound extends Component {
    render() {
      return (
        <div className="page-not-found text-center">
            <h2>Error 404</h2>
            
            <p>Sorry, this page does not exist</p>
            
            <p className="link">
                <NavLink to='/home' exact className="go-to-home">
                    Go to Home
                </NavLink>
            </p>

        </div>
      );
    }
  }
  
  export default PageNotFound;