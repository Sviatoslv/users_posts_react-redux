import React, { useState } from 'react';
import { getPosts } from './api';

const AddNewPost = ({ currentUserId, setPosts }) => {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
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
      const url = 'https://jsonplaceholder.typicode.com/posts';

      const data = {
        body: newPostBody,
        id: (new Date()).getTime(),
        title: newPostTitle,
        userId: currentUserId,
      };

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => console.log('Success:', response))
        .then(() => getPosts(currentUserId).then(setPosts))
        .catch((error) => console.error('Error:', error));
  
      setNewPostTitle('');
      setNewPostBody('');
      setSubmited(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {!submited &&
        <>
          <h2>Add New Post</h2>
          
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
            Add New Post
          </button>
        </>
      }

      {submited &&
        <div>
          <h2>Success!</h2>
          <p>Your Post was successfully created!</p>

          <button
            type="submit"
            className="button button--form"
            onClick={handleSubmited}
          >
            Add another one
          </button>
        </div>
      }
    </form>
)}

export default AddNewPost;