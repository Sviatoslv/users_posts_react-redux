import React from 'react';
import './Comments.css';

const Comments = ({ comments }) => (
  <section className="Comments">
    <div className="Comments__title-container">
      <h4>Post Comments</h4>
      <p>{comments.length} comments</p>
    </div>

    <ul className="Comments__list">
      {comments.map(comment =>
        <li key={comment.id} className="Comments__item">
          {comment.body}
          <div className="Comments__comment-contacts">
            <p className="additional-text">
              Name:
              <span className="additional-text--mark">
                {' '}{comment.name}
              </span>
            </p>
            
            <p className="additional-text">
              Email:
              <span className="additional-text--mark">
                {' '}{comment.email}
              </span>
            </p>
          </div>
        </li>
      )}
    </ul>
  </section>
)

export default Comments;