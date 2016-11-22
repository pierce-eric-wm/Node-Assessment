var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var albumSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  band_name: {
    type: String,
    required: true,
    unique: true
  },
  album_name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  comments: [commentSchema]
}, {
  timestamps: true
});
var Album = mongoose.model('Album', albumSchema);
module.exports = Album;
