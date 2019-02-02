import React, { Component } from 'react'
import Nav from './Nav'
import PageNotFound from './PageNotFound'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
      const { question, users, author, authedUser } = this.props
      const { id } = this.props.match.params

      let optionOneVotes = 0
      let optionTwoVotes = 0
      let optionOnePercentage = 0
      let optionTwoPercentage = 0
      let total = 0
      let authedUserAnswer = ''

      if(question !== undefined){
        optionOneVotes = Number(question.optionOne.votes.length)
        optionTwoVotes = Number(question.optionTwo.votes.length)
        total = optionOneVotes + optionTwoVotes
        optionOnePercentage = ( optionOneVotes / total ) * 100
        optionTwoPercentage = ( optionTwoVotes / total ) * 100
        authedUserAnswer = users[authedUser].answers[id]
      }
      
        
      if( question === null || users === null){
        return <PageNotFound />
      }
      return (
        <div className="text-center result"> 
          <Nav />
          <br />
          {question && 
          <div className="card center-block">
            <img src={author.avatarURL} className="profile-image" alt="profile"/>
            <h3>
                <small>{author.name} asks:</small>
            </h3>
            <p>Results</p>
            <div className={`card-full ${authedUserAnswer === 'optionOne'}`}>
                <p>Would you rather {question.optionOne.text}</p>
                <p className="votes">{optionOneVotes} out of {total} votes - {optionOnePercentage.toFixed(1)}%</p>
                {authedUserAnswer === 'optionOne' && <small className="pink-text">Your answer</small>}
            </div>
            <div className={`card-full ${authedUserAnswer === 'optionTwo'} `}>
                <p>Would you rather {question.optionTwo.text}</p>
                <p className="votes">{optionTwoVotes} out of {total} votes - {optionTwoPercentage.toFixed(1)}%</p>
                {authedUserAnswer === 'optionTwo' && <small className="pink-text">Your answer</small>}
            </div>
          </div>}
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
      users: users ? users : null, 
      author: users && questions[id]
              ? users[questions[id].author]
              : null,
      authedUser : authedUser
              ? authedUser
              : null 
    }  
  }
  
  export default connect(mapStateToProps)(Result);