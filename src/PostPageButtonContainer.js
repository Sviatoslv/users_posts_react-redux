import React from 'react';
import { Link } from 'react-router-dom';

const PostPageButtonContainer = ({ isEditOpen, setEditIsOpen, isDeleteOpen, setIsDeleteOpen }) => (
  <div className="PostPage__button-container">
  <Link to="/user_posts/" className="button">Back to Users Posts</Link>
  
  <div
    className="PostPage__button-container PostPage__button-container--modifier"
  >
    <button
      className="button button--post-modifier"
      onClick={() => setEditIsOpen(!isEditOpen)}
    >
      Edit
    </button>
    
    <button
      className="button button--post-modifier"
      onClick={() => setIsDeleteOpen(!isDeleteOpen)}
    >
      Delete
    </button>
  </div>
</div>
)

export default PostPageButtonContainer;