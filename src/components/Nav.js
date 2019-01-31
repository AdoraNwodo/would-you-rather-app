import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticate } from '../actions/shared'

class Nav extends Component {

    handleLogout = () => {
        this.props.dispatch(authenticate(""))
        this.props.history.push('/')
    }

    componentDidMount(){
        // redirect to login if no authedUser
        this.props.authedUser === "" && this.props.history.push('/')
    }

    render(){
        return (
            <div>
              <div className="row profile">
                  {this.props.avatar
                    ? <img src={this.props.avatar} className="profile-image"/>
                    : <img src="https://via.placeholder.com/150" className="profile-image"/> }
                  <p className="text-center">Hello, {this.props.name} ( {this.props.authedUser} )</p>
                  <button className="center-block" onClick={this.handleLogout}>
                      Logout
                  </button>
              </div>
              <div className="row navigation">
              <ul>
                  <li>
                      <NavLink to='/home' exact activeClassName='active'>
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/add' exact activeClassName='active'>
                          Add Question
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/leaderboard' exact activeClassName='active'>
                          LeaderBoard
                      </NavLink>
                  </li>
              </ul>
          </div>
          </div>
        );
    }
}
function mapStateToProps ({ users, authedUser }) {
    if(users[authedUser] !== undefined ){
        return {
            authedUser: authedUser,
            name: users[authedUser].name,
            avatar: users[authedUser].avatarURL,
        } 
    }
    return {authedUser: ""}
}
export default withRouter(connect(mapStateToProps)(Nav));
  