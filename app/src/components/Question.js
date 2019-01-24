import React, { Component } from 'react'
import Nav from './Nav';
import { NavLink } from 'react-router-dom'

class Question extends Component {
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
            <p>Would you rather?</p>
            <form action="" className="question-form">
              <input type="radio" name="gender" value="male" /> Let your friend find 100 dollars
              <br />
              <span>Or</span>
              <br />
              <input type="radio" name="gender" value="female" /> Be the one to find 100 dollars
              <br />
            </form>
            <button className="addquestion">
                Submit
            </button>
          </div>
      </div>
      );
    }
  }
  
  export default Question;