const express = require("express");
const Question = require("../models/QuestionSchema");
const questionRouter = express.Router();



questionRouter.get('/questions/get', async (req, res) => {
    if(!req.body)
        return res.status(400).send({ error: "Wrong body"});

    let { year } = req.body;

    const question = await Question.findOne({ year }); 

    if(!question)
        return res.status(400).send({ error: "Question not found"});

    res.send(question);
});

questionRouter.post('/questions/getAll', async (req, res) => {
    
    let { year, difficulty, amount = 10 } = req.body;

    if(!Question.find())
        return res.status(400).send({ error: "Questions not found" });

    if(amount > 50)
        return res.status(400).send({ error: "Too many questions to be selected" });

    const questions = await Question.find({ year, difficulty }).limit(amount);

    if(questions)
        res.send(questions);
    else
        res.status(400).send({ error: "Questions with such parameteres not found" });
});

questionRouter.post('/questions/create', async (req, res) => {
    if(!req.body)
        return res.status(400).send({ error: "Wrong body"});
    
    let { content, answers, year, difficulty, rating, keywords } = req.body;

    if(!content || !answers || !year || !difficulty || !rating || !keywords)
        return res.status(400).send({ error: "Wrong data"});
    
    const question = await Question.findOne({ content }); 

    if(question)
        return res.status(400).send({ error: "Question with same content already in database"});
    
    try {
        new Question({ content, answers, year, difficulty, rating, keywords }).save();
        return res.status(200).send({ added: true});
    } catch (error) {
        return res.status(400).send({ error });
    }
});

questionRouter.post('/questions/changeRating', async (req, res) => {
    if(!req.body)
        return res.status(400).send({ error: "Wrong body"});
    
    let { content } = req.body;

    if(!content)
        return res.status(400).send({ error: "Wrong data"});
    
    const question = await Question.findOne({ content }); 

    if(!question)
        return res.status(400).send({ error: "Question with such content not found"});
    
    await question.update({ rating: question.rating - 1 });
    res.status(200).send({ changed: true });
    
});

questionRouter.delete('/delete', async (req, res) => {
        
    let { content } = req.body;

    const question = await Question.findOne({ content }); 

    if(!question)
        return res.status(400).send({ error: "Question with such content not found"});
    
    await Question.deleteOne({ content });

    res.status(200).send();
});

module.exports = questionRouter;