import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './UserPostsList.css';
import { getPosts } from '../api';
import * as todoActions from '../store';

import Modal from './Modal';
import AddNewPost from './AddNewPost';

const UserPostsList = ({ currentUserId, setPosts, posts, users }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getPosts(currentUserId)
      .then(setPosts);
  }, [setPosts, currentUserId]);

  return (
    <div className="UserPostsList">
      <h2>
        Posts of {(users.find(user => user.id === currentUserId) || {}).name}
      </h2>

      <p>Posts quantity: {posts.length} </p>

      <ul className="UserPostsList__list">
        {posts.map(post =>
          <li
            key={post.id}
            className="UserPostsList__list-item"
          >
            <div>
              <h3 className="UserPostsList__post-title">{post.title}</h3>
              <p className="UserPostsList__post-body">{post.body}</p>
            </div>

            <Link to={`/user_posts/${post.id}`} className="button">
              Details
            </Link>
          </li>
        )}
      </ul>

      <div className="UserPostsList__button-container">
        <Link to="/" className="button">Back to Users List</Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="button button--add-new"
        >
          Add New
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <AddNewPost
          currentUserId={currentUserId}
          setPosts={setPosts}
        />
      </Modal>
    </div>
)}

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts,
  currentUserId: state.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch(todoActions.setPosts(posts)),
  addTodo: value => dispatch(todoActions.addTodo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPostsList);

UserPostsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPosts: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired,
}