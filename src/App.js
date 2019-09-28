import React, { useEffect } from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import './components/button.css';
import './components/form.css';

import { getUsers } from './api';
import * as todoActions from './store';

import UsersList from './components/UsersList';
import UserPostsList from './components/UserPostsList';
import PostPage from './components/PostPage';

const App = ({ setUsers }) => {
  useEffect(() => {
    getUsers()
      .then(setUsers);
  }, [setUsers]);

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

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(todoActions.setUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  setUsers: PropTypes.func.isRequired,
}
