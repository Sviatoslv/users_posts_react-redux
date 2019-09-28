import React, { useState } from 'react';
import { getPosts } from './api';

const EditPost = ({ currentUserId, setPosts, post }) => {
  const [newPostTitle, setNewPostTitle] = useState(post.title);
  const [newPostBody, setNewPostBody] = useState(post.body);
  const [submited, setSubmited] = useState(false);

  const handleNewTitleChange = (event) => {
    setNewPostTitle(event.target.value);
  };

  const handleNewPostBodyChange = (event) => {
    setNewPostBody(event.target.value);
  };

  const handleSubmited = () => {
    setSubmited(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPostBody && newPostTitle) {
      const url = 'https://jsonplaceholder.typicode.com/posts/1';

      const data = {
        body: newPostBody,
        id: (new Date()).getTime(),
        title: newPostTitle,
        userId: currentUserId,
      };

      fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => console.log('Success:', response))
        .then(() => getPosts(currentUserId).then(setPosts))
        .catch((error) => console.error('Error:', error));

      setSubmited(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {!submited &&
        <>
          <h2>Edit Post</h2>
          
          <div className="form__container">
            <label className="form__label">
              <p className="form__label-text">Post title:</p>

              <input
                type="text"
                value={newPostTitle}
                onChange={handleNewTitleChange}
                placeholder="Post title"
                className="form__input"
                required
              />
            </label>

            <label className="form__label">
              <p className="form__label-text">Post body:</p>

              <textarea
                type="text"
                rows="8"
                value={newPostBody}
                onChange={handleNewPostBodyChange}
                placeholder="Post body"
                className="form__input"
                required
              />
            </label>
          </div>

          <button type="submit" className="button button--form">
            Save Changes
          </button>
        </>
      }

      {submited &&
        <div>
          <h2>Success!</h2>
          <p>Your Post was successfully changed!</p>

          <button
            type="submit"
            className="button button--form"
            onClick={handleSubmited}
          >
            One more change!
          </button>
        </div>
      }
    </form>
)}

export default EditPost;