import React, { Component } from 'react'
import Nav from './Nav';

class LeaderBoard extends Component {
    render() {
      return (
          <div className="text-center"> 
              <Nav />
              <br />
              <div className="card-lg center-block">
                <div className="row">
                    <div className="img-col">
                        <img src="https://via.placeholder.com/150" className="profile-image"/>
                    </div>
                    <div className="details-col">
                        <p>Sarah Edo</p>
                        <p>7 answered questions</p>
                        <p>3 created questions</p>
                        <br />
                    </div>
                    <div className="score-col">
                        <p><strong>Score: 10</strong></p>
                    </div>
                </div>
              </div>
              <div className="card-lg center-block">
                <div className="row">
                    <div className="img-col">
                        <img src="https://via.placeholder.com/150" className="profile-image"/>
                    </div>
                    <div className="details-col">
                        <p>Sarah Edo</p>
                        <p>7 answered questions</p>
                        <p>3 created questions</p>
                        <br />
                    </div>
                    <div className="score-col">
                        <p><strong>Score: 10</strong></p>
                    </div>
                </div>
              </div>
          </div>
      );
    }
  }
  
  export default LeaderBoard;