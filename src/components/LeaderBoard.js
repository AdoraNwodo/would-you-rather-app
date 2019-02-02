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
                        <p><strong>Score: {Number(user.answers) + Number(user.questions)}</strong></p>
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
        ([key, value]) =>
        userArray.push({
            id: value.id,
            name: value.name,
            avatarURL: value.avatarURL,
            questions: value.questions.length,
            answers: Object.keys(value.answers).length,
        })
    );
    return {
        users: userArray
    }
  }
  
  export default connect(mapStateToProps)(LeaderBoard)