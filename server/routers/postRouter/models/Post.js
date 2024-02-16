import mongoose from 'mongoose';
import {ObjectId} from 'mongodb';

const Post = new mongoose.Schema({
  author: {type: ObjectId, ref: 'User', required: true},
  title: {type: String, required: true},
  content: {type: String, required: true},
  picture: {type: String}
});

export default mongoose.model('Post', Post);