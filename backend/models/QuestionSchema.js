const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema ({
    content: String,
    answers: [String],
    difficulty: String,
    rating: Number,
    keywords: [String],
});

module.exports = mongoose.model('Question', QuestionSchema);