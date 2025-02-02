const mongoose = require('mongoose');

const RoundSchema = new mongoose.Schema({
  roundName: String,
  accessCode: String,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  }],
});

module.exports = mongoose.model('Round', RoundSchema);
