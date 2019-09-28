import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getPosts } from '../api';

const DeletePost = ({ currentUserId, setPosts, post }) => {
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {id: `${post.id}`}

    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => console.log('Success:', response))
      .then(() => getPosts(currentUserId).then(setPosts))
      .catch((error) => console.error('Error:', error));

    setSubmited(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      {!submited &&
        <>
          <h2>
            Post will be lost,
            <br />
            like tears in the rain!
          </h2>

          <button type="submit" className="button button--form">
            Delete post!
          </button>
        </>
      }

      {submited &&
        <div>
          <h2>Success!</h2>
          <p>Post was successfully deleted!</p>
          
          <Link
            to="/user_posts/"
            className="button button--form"
          >
            Back to Users Posts
          </Link>
        </div>
      }
    </form>
)}

export default DeletePost;

DeletePost.propTypes = {
  setPosts: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
}

DeletePost.defaultProps = {
  post: {}
};
