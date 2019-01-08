const express = require('express');
const router = express.Router();
const helper = require('./helper/index');

// User Model
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send("The Users Page");;
});



// @route   POST user/register
// @desc    Register a User
// @access  Public
router.post('/register', (req, res) => {
    const { first_name, last_name, email, username, password, Access_Token } = req.body;

    const newUser = new User({
        name: first_name + last_name,
        email,
        username,
        password,
        Access_Token

    });
    newUser.save().then(user => res.status(201).json({ message: "User Registered", user }));
});


// @route   POST user/register
// @desc    Register a User
// @access  Public
router.post('/login', (req, res) => {
    const { username, password } = req.body;


    User.find({ username, password }).then((result) => {
        if (helper.isEmpty(result)) {
            console.log("err result", result);

            return res.status(403).json({ message: "Forbidden" });
        }
        else {
            console.log("result", result);

            return res.status(200).json({ message: "login success" });
        }
    });


});




module.exports = router;
