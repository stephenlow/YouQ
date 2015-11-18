var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

//Export model schema
module.exports = SongSchema;
