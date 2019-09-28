import React from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import './button.css';
import './form.css';
import { getUsers } from './api';
import * as todoActions from './store';

import UsersList from './UsersList';
import UserPostsList from './UserPostsList';
import PostPage from './PostPage';

class App extends React.Component {
  componentDidMount() {
    getUsers()
      .then(this.props.setUsers);
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <h1>Post Collection</h1>

          <Switch>
            <Route path="/" exact component={UsersList}/>

            <Route path="/user_posts" exact component={UserPostsList} />

            <Route path="/user_posts/:postId?" render={({ match }) => (
              <PostPage match={match} />
            )}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  currentUserId: state.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(todoActions.setUsers(users)),
  addTodo: value => dispatch(todoActions.addTodo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
