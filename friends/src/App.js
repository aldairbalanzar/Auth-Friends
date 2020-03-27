import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/protected'>Protected Friends Page</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/protected' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
