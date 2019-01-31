import React, { Component } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Question extends Component {
    componentDidMount(){
      if(this.props.authedUser === null)
        this.props.history.push('/')
    }

    handleRadioOptionChange = (value) => {
      console.log(value)
    }

    state = {
      option: ''
    }

    render() {
      const { question } = this.props
        
      if(question === null){
          return <p>This question does not exist</p>
      }
      return (
        <div className="text-center"> 
          <Nav />
          <br />
          <div className="card center-block">
            { this.props.author && 
            <div>
              <img src={this.props.author.avatarURL} className="profile-image"/>
              <h3>
                  <small>{this.props.author.name} asks:</small>
              </h3>
            </div>}
            <p>Would you rather?</p>
            { this.props.question && 
            <form action="" className="question-form">
              <input type="radio" name="answer" value="optionOne" onChange={(e) => this.handleRadioOptionChange(e.target.value)} /> {this.props.question.optionOne.text}
              <br />
              <span>Or</span>
              <br />
              <input type="radio" name="answer" value="optionTwo" onChange={(e) => this.handleRadioOptionChange(e.target.value)} /> {this.props.question.optionTwo.text}
              <br />
            </form>}
            <button className="addquestion">
                Submit
            </button>
          </div>
      </div>
      );
    }
  }

  function mapStateToProps({authedUser, questions, users}, props){
    const { id } = props.match.params;

    return {
      question: questions
              ? questions[id]
              : null,
      author: users && questions[id]
              ? users[questions[id].author]
              : null,
      authedUser : authedUser
              ? authedUser
              : null 
    }
    
    
  }
  
  export default connect(mapStateToProps)(Question);