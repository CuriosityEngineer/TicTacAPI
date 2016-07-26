var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  playerOne: {type: String, required: false},
  playerTwo: {type: String, required: false},
  disabledX: {type: Boolean, required: false},
  disabledO: {type: Boolean, required: false},
  playerOneMove: {type: String, required: false},
  playerTwoMove: {type: String, required: false},
  winner: {type: String, required: false},
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

GameSchema.index({'updatedAt': -1, background: true});

var GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;
