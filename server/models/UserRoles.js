import {Schema, model} from 'mongoose';
import {USER_ROLES} from '../shared/constants/roles.js';

const Role = new Schema({
  value: {type: String, unique: true, default: USER_ROLES.USER},
});

module.exports = model('Role', Role);