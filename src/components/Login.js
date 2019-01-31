import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../actions/shared'


class Login extends Component {

    state = {
        user: "",
        login_failed: false
    };

    handleUserSelected = (user) => {
        if(user !== ""){
            this.setState({
                user: user,
                login_failed: false,
            });
            console.log("User: ", this.state)
        }  
    }

    handleClick = ()  => {
  
        if(this.state.user !== ""){
            this.props.dispatch(authenticate(this.state.user))
            this.props.history.push('/home')
        }else{
            this.setState({
                login_failed: true,
            });
        }
    }

    render() {
      return (
          <div className="login-box"> 
              <p className="text-center">Login to play</p>
              {this.state.login_failed &&
                <div>
                    <small className="pink-text">You have to choose a user to login</small><br /><br />
                </div>
              }
              <select className="form-control" value={this.state.user} onChange={(e) => this.handleUserSelected(e.target.value)}>
                <option value="">Choose a User</option>
                {this.props.users.length > 0 &&
                    this.props.users.map((user) => (
                    <option value={user.id} key={user.id}>{user.name}</option>
                ))}
              </select>
              <button className="btn-login form-control" type="submit" onClick={this.handleClick}>
                  Login
              </button>
          </div>
      );
    }
}

function mapStateToProps ({ users }) {
    console.log("Users", users);

    var userArray = [];
    Object.entries(users).forEach(
        ([key, value]) => // console.log(key, value)
        userArray.push({
            id: value.id,
            name: value.name,
        })
    );
    return {
        users: userArray
    }

}
  
  export default connect(mapStateToProps)(Login);