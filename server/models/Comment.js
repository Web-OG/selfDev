import {Schema, model} from 'mongoose';
import {ObjectId} from 'mongodb';

const Comment = new Schema({
  content: {type: String, required: true},
  authorId: {type: ObjectId, ref: 'User', required: true},
  postId: {type: ObjectId, ref: 'Post', required: true},
  parentCommentId: {type: ObjectId, ref: 'Comment'},
  likes: [{type: ObjectId, ref: 'Like'}],
  createdAt: String,
});

export default model('Comment', Comment);