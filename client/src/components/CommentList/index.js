import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <>
      <span>Comments:</span>
      <ul className="collection">
        
        {comments &&
        comments.map(comments => (
          <li className="collection-item avatar" key={comments._id}>
              <i className="material-icons circle">face</i>
            <p key={comments._id}>
              {comments.commentBody}</p>
            <p>by{' '} {comments.writtenBy} </p>
            <p>on {comments.createdAt}</p>
          </li>
        ))}
      </ul>

    </>
  );
};

export default CommentList;
