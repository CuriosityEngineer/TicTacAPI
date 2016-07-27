var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TileSchema = new Schema({
  tile: {type: String, required: false},

  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

TileSchema.index({'updatedAt': -1, background: true});

var TileModel = mongoose.model('tile', TileSchema);

module.exports = TileModel;
