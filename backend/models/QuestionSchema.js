const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema ({
    content: String,
    answers: [{number: Number, answer: String}],
    difficulty: String,
    rating: Number,
    keywords: [String],
    correctAnswer: Number
});

module.exports = mongoose.model('Question', QuestionSchema);