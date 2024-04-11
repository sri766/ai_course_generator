const express = require('express');
const router = express.Router();

require('../db/connection');
const User = require('../model/User');

router.get('/', (req, res) => {
    res.send('HELLO WORLD FORM THE SERVER-ROUTER.JS');
});

router.post('/register', async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(422).json({ Error: "Please fill all the fields properly." });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ Message: "Email already exists." });
        }

        const user = new User({ name, email, phone, password });
        await user.save();
        res.status(201).json({ Message: "User registered successfully." });
    } catch (error) {
        res.status(500).json({ Error: "Failed to register." });
    }
});

module.exports = router;
