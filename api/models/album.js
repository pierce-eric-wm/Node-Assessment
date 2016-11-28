/**
 * Album.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    image: {
      type: 'string',
      required: true,
      defaultsTo: ""
    },
    band_name: {
      type: 'string',
      required: true,
      defaultsTo: ""
    },
    album_name: {
      type: 'string',
      required: true,
      defaultsTo: ""
    },
    rating: {
      type: 'string',
      required: true,
      defaultsTo: ""
    },
  category: {
    type: 'string',
    required: true,
    defaultsTo: ""
  }}};

