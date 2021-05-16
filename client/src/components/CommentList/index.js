import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className="card mb-6">
      <h4 className="text-light">Comments</h4>
      <hr/>
      <div className="card-body">
        {comments &&
          comments.map(comments => (
            <p className="pill mb-6" key={comments._id}>
              {comments.commentBody} by{' '}
              {comments.writtenBy} on {comments.createdAt}
            </p>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
