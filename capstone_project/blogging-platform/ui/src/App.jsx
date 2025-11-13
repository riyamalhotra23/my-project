import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/feed" component={Feed} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={Feed} />
      </Switch>
    </Router>
  );
};

export default App;