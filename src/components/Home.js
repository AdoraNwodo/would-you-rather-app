import React, { Component } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Home extends Component {
    componentDidMount(){
      if(this.props.authedUser === null)
        this.props.history.push('/')
    }

    state = {
        questionType: "unanswered"
    }

    handleUnansweredQuestionsClick = () => {
        console.log("unanswered question click")
    }

    handleAnsweredQuestionsClick = () => {
        console.log("answered question click")
    }

    render() {
      return (
          <div className="text-center">
              <Nav />
              <br />
              <div className="card-lg-2 center-block">
                <ul>
                    <li>
                        {this.state.questionType === "unanswered" 
                            ? <button className="active">Unanswered Questions</button>
                            : <button onClick={this.handleUnansweredQuestionsClick}>Unanswered Questions</button>
                        }
                    </li>
                    <li>
                        {this.state.questionType === "answered" 
                            ? <button className="active">Answered Questions</button>
                            : <button onClick={this.handleAnsweredQuestionsClick}>Answered Questions</button>
                        }
                    </li>
                </ul>
                { this.props.unanswered !== undefined &&
                this.props.unanswered.map((question) => 
                <div className="questionlistcard" key={question.id}>
                    <div className="row">
                        <div className="img-col">
                            <img src={question.user.avatarURL} className="profile-image"/>
                        </div>
                        <div className="details-col">
                            <p>{question.user.name} asks - Would you rather</p>
                            <p><strong>{question.optionOne.text}...</strong></p>
                            <p>
                            <NavLink to={`/questions/${question.id}`}>
                                View Poll
                            </NavLink>
                            </p>
                            <br />
                        </div>
                    </div>
                </div>)}
              </div>
          </div>
      );
    }
  }
function mapStateToProps ({ users, authedUser , questions}) {

    if(users[authedUser] !== undefined ){
        let myAnswers = Object.keys(users[authedUser].answers);
        let questionsArray = Object.values(questions); 
        let unanswered = [];
        let answered = [];

        questionsArray.forEach(
            (x) => {
            myAnswers.includes(x.id) ? answered.push(x) : unanswered.push(x);
            x.user = users[x.author];
        });

        return { answered, unanswered };
    }
    
    return {}

}
  
export default connect(mapStateToProps)(Home);