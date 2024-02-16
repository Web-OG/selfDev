import mongoose from 'mongoose';
import {ObjectId} from 'mongodb';

const Profile = new mongoose.Schema({
  _user: {type: ObjectId, ref: 'User', required: true},
  firstname: {type: String},
  lastname: {type: String},
  age: {type: String},
  phone: {type: String},
  country: {type: String},
  city: {type: String},
  avatar: {type: String}
});

export default mongoose.model('Profile', Profile);