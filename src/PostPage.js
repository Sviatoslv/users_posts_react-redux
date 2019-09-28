import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './PostPage.css';
import { getPosts, getComments } from './api';
import * as todoActions from './store';

import Modal from './Modal';
import Comments from './Comments';
import EditPost from './EditPost';
import DeletePost from './DeletePost';
import PostPageButtonContainer from './PostPageButtonContainer';

const PostPage = ({
  users, comments, currentUserId, posts, setPosts, setComments, match
}) => {
  const [isEditOpen, setEditIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    getPosts(currentUserId)
      .then(setPosts);

    getComments(match.params.postId)
      .then(setComments);
  }, [setComments]);

  return (
    <div className="PostPage">
      <h2>Post page</h2>
      
      <section className="PostPage__post">
        <h3 className="PostPage__post-title">
          {(posts.find(post => post.id === +match.params.postId) || {}).title}
        </h3>

        <p className="PostPage__post-body">
          {(posts.find(post => post.id === +match.params.postId) || {}).body}
        </p>

        <p className="additional-text">
          Author: 
          <Link
            to="/user_posts/"
            className=" additional-text additional-text--link"
          >
            {' '}{(users.find(user => user.id === currentUserId) || {}).name}
          </Link>
        </p>

        <Comments comments={comments}/>
      </section>

      <PostPageButtonContainer
        isEditOpen={isEditOpen}
        setEditIsOpen={setEditIsOpen}
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
      />

      <Modal
        isOpen={isEditOpen}
        setIsOpen={setEditIsOpen}
      >
        <EditPost
          post={posts.find(post => post.id === +match.params.postId)}
          currentUserId={currentUserId}
          setPosts={setPosts}
        />
      </Modal>

      <Modal
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
      >
        <DeletePost
          post={posts.find(post => post.id === +match.params.postId)}
          currentUserId={currentUserId}
          setPosts={setPosts}
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
        />
      </Modal>
    </div>
)}

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts,
  currentUserId: state.currentUserId,
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch(todoActions.setPosts(posts)),
  setComments: comments => dispatch(todoActions.setComments(comments)),
  addTodo: value => dispatch(todoActions.addTodo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);


