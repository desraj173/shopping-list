const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const { name } = req.body;
    if (name === '' || null) {
        res.send(`Invalid Value : Name is Required '${name}' is given`);
        return false;
    }
    const newItem = new Item({
        name: name
    });

    newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


// @route   UPDATE api/items/:id
// @desc    Update An Item
// @access  Public
router.put('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            const { name } = req.body;
            console.log(item);
            // return false;
            item.updateOne({ name }).then(() => res.json({ success: true }))
                .catch(err => res.status(404).json({ success: false }))
        })
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;
