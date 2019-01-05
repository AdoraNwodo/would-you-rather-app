import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav';
import Header from './Header';
import PageNotFound from './PageNotFound';
import Login from './Login';

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
