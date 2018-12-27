const express = require('express');
const router = express.Router();

// User Model
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send("The User Page");;
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
        if (result) {
            console.log("result");
            return;
        }
        else {
            console.log("no result");
            return;
        }
    });

    // if (!user) {
    //     console.log(err);
    // } else {
    //     console.log("user finded");
    // }
    //     .then((docs) => {
    //     console.log(docs);
    //     res.send("login successfull");

    // }).catch((err) => {
    //     console.log("err", err)
    // })

});


module.exports = router;
