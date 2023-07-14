import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
  Round: Number,
  PlayerOne: {
    Name: String,
    Score: Number,
  },
  PlayerTwo: {
    Name: String,
    Score: Number,
  },
  Date: {
    type: Date,
    default: new Date(),
  },
});

const GameData = mongoose.model('GameData', gameSchema);

export default GameData;
