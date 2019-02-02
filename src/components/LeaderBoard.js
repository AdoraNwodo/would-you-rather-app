import React, { Component } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render() {
      const { users } = this.props
      return (
          <div className="text-center"> 
              <Nav />
              <br />
              {users !== undefined &&
              users.map((user) => 
              <div className="card-lg center-block" key={user.id}>
                <div className="row">
                    <div className="img-col">
                        <img src={user.avatarURL} className="profile-image" alt="profile"/>
                    </div>
                    <div className="details-col">
                        <p>{user.name} ({user.id}) </p>
                        <p>{user.answers} answered questions</p>
                        <p>{user.questions} created questions</p>
                        <br />
                    </div>
                    <div className="score-col">
                        <p><strong>Score: {user.score}</strong></p>
                    </div>
                </div>
              </div>
              )}
          </div>
      );
    }
  }
  function mapStateToProps ({ users }) {
    var userArray = [];
    Object.entries(users).forEach(
        ([key, value]) =>{
            const questions = value.questions.length
            const answers = Object.keys(value.answers).length
            userArray.push({
                id: value.id,
                name: value.name,
                avatarURL: value.avatarURL,
                questions: questions,
                answers: answers,
                score: questions + answers
            })
        }
    );
    return {
        users: userArray.sort((a,b) => b.score - a.score)
    }
  }
  
  export default connect(mapStateToProps)(LeaderBoard)