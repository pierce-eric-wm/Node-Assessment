/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    username: {
    type: 'text', required: true
  },
    password: {
  type: 'text',
      required: true
    },
    vip: {
  type: 'boolean', defaultsTo: false, required: true
},
    isEnabled: {
  type: 'boolean', required: true,
defaultsTo: true }
}
};

