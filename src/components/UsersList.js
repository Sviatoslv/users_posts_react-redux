import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './UsersList.css';
import * as todoActions from '../store';

const UsersList = ({ users, setcurrentUserId }) => {
  const handleUser = (userId) => {
    setcurrentUserId(userId)
  }

  return (
    <div className="UsersList">
      <h2>Page "Users"</h2>
      <p>(users quantyty: {users.length})</p>

      <ul className="UsersList__list">
        {users.map(user =>
          <li key={user.id} className="UsersList__list-item">
            <h3 className="UsersList__header">{user.name}</h3>
            <ul className="UsersList__contacts-list">
              <li className="UsersList__contacts-item additional-text">{user.email}</li>
              <li className="UsersList__contacts-item additional-text">{user.website}</li>
            </ul>
            <Link
              to="/user_posts"
              onClick={() => handleUser(user.id)}
              className="button"
            >
               Posts
            </Link>
          </li>
        )}
      </ul>
    </div>
)}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  setcurrentUserId: value => dispatch(todoActions.setcurrentUserId(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setcurrentUserId: PropTypes.func.isRequired,
}