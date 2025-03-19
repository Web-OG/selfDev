import {Schema, model} from 'mongoose';
import {ObjectId} from 'mongodb';

const Notification = new Schema({
  author: {type: ObjectId, ref: 'User', required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  createdAt: String,
  link: String,
});

export default model('Notification', Notification);