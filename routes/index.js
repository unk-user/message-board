const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

const messagesArr = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const messages = await Message.find({}).sort({ added: -1 }) || messagesArr;
    res.render('index', {messages: messages});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async function (req, res, next) {
  const newMessage = new Message(req.body);
  try {
    await newMessage.save();
    res.status(201);
    res.redirect('/');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
