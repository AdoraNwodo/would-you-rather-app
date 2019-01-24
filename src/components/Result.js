import React, { Component } from 'react'
import Nav from './Nav';
import { NavLink } from 'react-router-dom'

class Result extends Component {
    render() {
      return (
        <div className="text-center"> 
          <Nav />
          <br />
          <div className="card center-block">
            <img src="https://via.placeholder.com/150" className="profile-image"/>
            <h3>
                <small>Nenne Nwodo asks:</small>
            </h3>
            <p>Results</p>
            <div className="card-full answered">
                <p>Would you rather find $1,000 yourself</p>
                <p className="votes">2 out of 3 votes - 66.7%</p>
                <small className="pink-text">Your answer</small>
            </div>
            <div className="card-full">
                <p>Would you rather let your friend find $1,000</p>
                <p className="votes">1 out of 3 votes - 33.3%</p>
            </div>
          </div>
      </div>
      );
    }
  }
  
  export default Result;