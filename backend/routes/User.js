const express = require("express");
const bcrypt = require('bcrypt');
const User = require("../models/UserSchema");
const userRouter = express.Router();

userRouter.get('/users/get', async (req, res) => {
    if(!req.body)
        return res.status(400).send({ error: "Wrong body"});
    
    let { email } = req.body;

    const user = await User.findOne({ email }); 

    if(!user)
        return res.status(400).send({ error: "User not found"});
    
    res.send(user);
});

userRouter.get('/users/getAll', async (req, res) => {
    if(!User.find())
        return res.status(400).send({ error: "Users not found"});
    
    res.send(await User.find());
});

userRouter.post('/users/register', async (req, res) => {
    if(!req.body)
        return res.status(400).send({ error: "Wrong body"});
    
    let { email, password} = req.body;

    if(!email || !password)
        return res.status(400).send({ error: "Wrong data"});
    
    const user = await User.findOne({ email }); 

    console.log(user);
    if(user)
        return res.status(400).send({ error: "Email already used in database"});
    
    try {
        password = bcrypt.hashSync(password, 10);
        new User({ email, password }).save();
        return res.status(200).send({ added: true});
    } catch (error) {
        return res.status(400).send({ error });
    }
});

userRouter.post('/users/login', async (req, res) => {
    if(!req.body)
        return res.status(400).send({ error: "Wrong body"});
    
    let { email, password} = req.body;

    if(!email || !password)
        return res.status(400).send({ error: "Wrong data"});
    
    const user = await User.findOne({ email }); 

    if(!user)
        return res.status(400).send({ error: "Account with such email not found"});
    
    console.log(bcrypt.compareSync(user.password, password));
    if(bcrypt.compareSync(password, user.password))
        res.status(200).send({ correctPassowrd: true });
    else
        res.status(403).send({ error: "Incorrect password"});
    
});

userRouter.delete('/users/delete', async (req, res) => {
    
    const user = await User.findOne({ email }); 

    if(!user)
        return res.status(400).send({ error: "Account with such email not found"});
    
    User.deleteOne({ email });

    res.status(200).send({});
});

module.exports = userRouter;