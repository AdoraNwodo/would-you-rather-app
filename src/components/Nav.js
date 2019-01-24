import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default function Nav(){
      return (
          <div>
            <div className="row profile">
                <img src="https://via.placeholder.com/150" className="profile-image"/>
                <p className="text-center">Hello, User Name</p>
                <button className="center-block">
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
  