const Feed = require('./feed-schema');

async function saveMessage(content) {
   return await Feed.create({ content });
}

async function fetchMessages() {
   return await Feed.find();
}

module.exports = {
   saveMessage,
   fetchMessages,
};
