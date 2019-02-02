import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { handleAddQuestion } from '../actions/questions'

class AddQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        optionsIncomplete: false,
        questionAdded: false
    }
    handleOptionOneChange = (optionOne) => {
        this.setState({
            optionOne,
            optionsIncomplete: false,
            questionAdded: false
        });
    }
    handleOptionTwoChange = (optionTwo) => {
        this.setState({
            optionTwo,
            optionsIncomplete: false,
            questionAdded: false
        });
    }
    handleAddQuestionClick = () => {
        if(this.state.optionOne.trim() === '' || this.state.optionTwo.trim() === ''){
            this.setState({ 
                optionsIncomplete: true,
                optionOne: '',
                optionTwo: '', 
            })
            return
        }
        this.props.dispatch(handleAddQuestion( this.state.optionOne, this.state.optionTwo, this.props.authedUser ))
        this.setState({ questionAdded: true, optionOne: '', optionTwo: '' })
    }
    render() {
      const { questionAdded, optionsIncomplete } = this.state
      return (
          <div className="text-center"> 
              <Nav />
              <br />
              {questionAdded &&
                <p>
                    <small className="pink-text">Question added. You can add more if you like </small>
                </p>}
              <div className="card center-block">
                <h3>
                    <small>Add New Question</small>
                </h3>
                <p><small>Complete the Question:</small></p>
                <p><small>Would you rather...</small></p>
                <br />
                {optionsIncomplete &&
                <p>
                    <small className="pink-text">Please fill options one & two</small>
                </p>}
                <input type="text" placeholder="Enter option one text here" onChange={(e) => this.handleOptionOneChange(e.target.value)}/>
                <span>Or</span>
                <input type="text" placeholder="Enter option two text here" onChange={(e) => this.handleOptionTwoChange(e.target.value)}/>
                <button className="addquestion" onClick={this.handleAddQuestionClick}>
                    Add Question
                </button>
              </div>
          </div>
      );
    }
  }
  
  function mapStateToProps ({ authedUser, questions }) {
    return {
        authedUser,
        questions,
    }
  }
  
  export default connect(mapStateToProps)(AddQuestion)