const {Schema, model} = require('mongoose');
const {USER_ROLES} = require('../../../shared/constants/roles.js');

const Role = new Schema({
  value: {type: String, unique: true, default: USER_ROLES.USER},
});

module.exports = model('Role', Role);