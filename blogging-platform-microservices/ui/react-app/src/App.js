import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import PostList from './components/PostList';
import CommentList from './components/CommentList';

function App() {
  return (
    <Router>
      <div>
        <h1>Blogging Platform</h1>
        <Switch>
          <Route path="/users" component={UserList} />
          <Route path="/posts" component={PostList} />
          <Route path="/comments" component={CommentList} />
          <Route path="/" exact>
            <h2>Welcome to the Blogging Platform</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;