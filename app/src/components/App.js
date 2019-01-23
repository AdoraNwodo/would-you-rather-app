import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Home from './Home';
import AddQuestion from './AddQuestion';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Fragment>
            <div className='container'>
              <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' exact component={Home} />
                <Route path='/add' exact component={AddQuestion} />
                <Route path='/leaderBoard' exact component={LeaderBoard} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      
      </div>
    );
  }
}

export default App;
