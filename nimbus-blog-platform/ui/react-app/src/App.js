import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PostList from './components/PostList';
import CommentThread from './components/CommentThread';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/posts" component={PostList} />
          <Route path="/posts/:postId/comments" component={CommentThread} />
          <Route path="/" exact>
            <h1>Welcome to the Blogging Platform</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;