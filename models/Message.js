const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  added: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
