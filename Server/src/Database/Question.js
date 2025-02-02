const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: String,
  options: [String],
  correctAnswer: String,
  codeSnippet: String, // Optional for code-related questions
  roundId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Round',
  },
});

module.exports = mongoose.model('Question', QuestionSchema);
