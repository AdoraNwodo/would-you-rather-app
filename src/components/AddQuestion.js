import React, { Component } from 'react'
import Nav from './Nav';

class AddQuestion extends Component {
    render() {
      return (
          <div className="text-center"> 
              <Nav />
              <br />
              <div className="card center-block">
                <h3>
                    <small>Add New Question</small>
                </h3>
                <p><small>Complete the Question:</small></p>
                <p><small>Would you rather...</small></p>
                <br />
                <input type="text" placeholder="Enter option one text here" />
                <span>Or</span>
                <input type="text" placeholder="Enter option two text here" />
                <button className="addquestion">
                    Add Question
                </button>
              </div>
          </div>
      );
    }
  }
  
  export default AddQuestion;