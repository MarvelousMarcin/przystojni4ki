const express = require("express");
const Question = require("../models/QuestionSchema");
const questionRouter = express.Router();



questionRouter.get('/get/:id', async (req, res) => {
    const question1 = new Question({
        content: "I am gonna wwwaaaalk to POLAND",
        answers: [
            {number: 1, answer: "YES YES YES"},
            {number: 2, answer: "NO NO NO"},
        ],
        difficulty: "hard",
        rating: 9,
        keywords: [
            "czarny", "biały", "1917"
        ],
        correctAnswer: 1
        
    });

    await question1.save();

    res.send(question1);
});

questionRouter.get('/get', async (req, res) => {
    res.send('GET');
    const amount = req.body.amount;
    const difficulty = req.body.difficulty;
    const keywords = req.body.keywords;
});

questionRouter.put('/update', async (req, res) => {
    res.send('UPDATE');
});

questionRouter.post('/create', async (req, res) => {
    res.send('CREATE');
});

questionRouter.delete('/delete', async (req, res) => {
    res.send('DELETE');
});

module.exports = questionRouter;