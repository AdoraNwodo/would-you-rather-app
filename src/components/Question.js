import React, { Component } from 'react'
import Nav from './Nav'
import PageNotFound from './PageNotFound'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {
    componentDidMount(){
      if(this.props.authedUser === null)
        this.props.history.push(`/login/redirect/${this.props.match.params.id}`)
    }

    state = {
      option: '',
      submitError: false
    }

    handleRadioOptionChange = (value) => {
      this.setState({
        option: value,
        submitError: false,
      })
    }

    handleSubmit = () => {
      const { option } = this.state
      if(option === ''){
        this.setState({
          submitError: true,
        })
        return
      }

      // save answer
      this.props.dispatch(handleAnswerQuestion( this.props.authedUser, this.props.match.params.id, option ))

      // redirect to result page
      this.props.history.push(`/results/${this.props.match.params.id}`)
    }

    render() {
      const { question, author } = this.props
      const { submitError } = this.state
        
      if(question === undefined){
          return(<PageNotFound />);
      }
      
      return (
        <div className="text-center"> 
          <Nav />
          <br />
          <div className="card center-block">
            {submitError &&
              <div>
                  <small className="pink-text">You have to select an answer</small><br /><br />
              </div>
            }
            { author && 
            <div>
              <img src={author.avatarURL} className="profile-image" alt="profile"/>
              <h3>
                  <small>{author.name} asks:</small>
              </h3>
            </div>}
            <p>Would you rather?</p>
            { question && 
            <form action="" className="question-form">
              <input type="radio" name="answer" value="optionOne" onChange={(e) => this.handleRadioOptionChange(e.target.value)} /> {question.optionOne.text}
              <br />
              <span>Or</span>
              <br />
              <input type="radio" name="answer" value="optionTwo" onChange={(e) => this.handleRadioOptionChange(e.target.value)} /> {question.optionTwo.text}
              <br />
            </form>}
            <button className="addquestion" onClick={this.handleSubmit}>
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