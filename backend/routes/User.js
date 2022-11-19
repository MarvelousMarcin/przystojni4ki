const express = require("express");
const User = require("../models/UserSchema");
const userRouter = express.Router();


userRouter.get('/get/:id', async (req, res) => {
    const user1 = new User ({
        email: 'hello',
        password: 'password'
    });
    
    const user2 = new User ({
        email: 'bye',
        password: 'root'
    });

    //await user1.save();
    await user2.save();
    res.send(user1);
});

userRouter.get('/get', async (req, res) => {
    const user1 = new User ({
        email: 'hello',
        password: 'password'
    });
    
    const user2 = new User ({
        email: 'bye',
        password: 'root'
    });

    //await user1.save();
    await user2.save();
    res.send(user1);
});

userRouter.put('/update', async (req, res) => {
    res.send('UPDATE');
});

userRouter.post('/create', async (req, res) => {
    res.send('CREATE');
});

userRouter.delete('/delete', (req, res) => {
    res.send('DELETE');
});

module.exports = userRouter;