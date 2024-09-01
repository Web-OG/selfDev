import {Schema, model} from 'mongoose';
import {ObjectId} from 'mongodb';

const Like = new Schema({
  content: {type: String, required: false},
  authorId: {type: ObjectId, ref: 'User', required: true},
  postId: {type: ObjectId, ref: 'Post', required: () => !this.commentId},
  commentId: {type: ObjectId, ref: 'Comment', required: () => !this.postId}
});

export default model('Like', Like);