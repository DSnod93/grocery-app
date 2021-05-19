import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ currentProductId }) => {
  const [commentBody, setBody] = useState();
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {

      // sets the commentBody
      setBody(event.target.value)
      setCharacterCount(event.target.value.length);

    }
  };

  // submit form
  const handleFormSubmit = async event => {
    // event.preventDefault();

    try {
      await addComment({
        variables: { commentBody, productId : currentProductId }
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);

    }
  };

  return (
    <div>
      <span> Leave a Comment </span>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Enter your comment"
          value={commentBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        
        <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        </p>

        <button className="btn col-12 col-md-3 blue" type="submit">
          Submit
        </button>

        
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default CommentForm;
