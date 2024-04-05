import {Schema, model} from 'mongoose';
import {ObjectId} from 'mongodb';

export const postTypeEnum = ['it', 'science', 'economics'];

const Block = new Schema({
  code: String,
  type: {type: String, enum: ['text', 'image', 'code']},
  src: String,
  title: String,
  paragraphs: [String],
});

const Post = new Schema({
  author: {type: ObjectId, ref: 'User', required: true},
  title: {type: String, required: true},
  subtitle: String,
  views: String,
  img: String,
  createdAt: String,
  type: {
    type: [String], enum: postTypeEnum,
    required: true
  },
  blocks: {
    type: [Block],
    required: true
  }
});

export default model('Post', Post);