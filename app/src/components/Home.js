import React, { Component } from 'react'
import Nav from './Nav';
import { NavLink } from 'react-router-dom'

class Home extends Component {
    render() {
      return (
          <div className="text-center"> 
              <Nav />
              <br />
              <div className="card-lg-2 center-block">
                <ul>
                    <li>
                        <button className="active">Unanswered Questions</button>
                    </li>
                    <li>
                        <button>Answered Questions</button>
                    </li>
                </ul>
                <div className="questionlistcard">
                    <div className="row">
                        <div className="img-col">
                            <img src="https://via.placeholder.com/150" className="profile-image"/>
                        </div>
                        <div className="details-col">
                            <p>Sarah Edo asks - Would you rather</p>
                            <p><strong>become a superhero...</strong></p>
                            <p>
                            <NavLink to='/'>
                                View Poll
                            </NavLink>
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="questionlistcard">
                    <div className="row">
                        <div className="img-col">
                            <img src="https://via.placeholder.com/150" className="profile-image"/>
                        </div>
                        <div className="details-col">
                            <p>Sarah Edo asks - Would you rather</p>
                            <p><strong>become a superhero...</strong></p>
                            <p>
                            <NavLink to='/'>
                                View Poll
                            </NavLink>
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
              </div>
          </div>
      );
    }
  }
  
  export default Home;