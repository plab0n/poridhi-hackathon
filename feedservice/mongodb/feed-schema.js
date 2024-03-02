const mongoose = require('mongoose');

const feed = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   content: {
      type: String,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   createdBy: {
      type: String,
      default: "",
   },
});

const Feed = mongoose.model('Message', feed);

module.exports = Feed;
