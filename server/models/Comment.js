const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');

const CommentSchema = new Schema(
    {
      writtenBy: {
        type: String,
        required: true
      },
      commentBody: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      // use ReplySchema to validate data for a reply
      replies: [ReplySchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
);

CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
  });

const Comment = model('Comment', CommentSchema);

module.exports = Comment;