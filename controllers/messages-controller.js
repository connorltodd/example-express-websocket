const Message = require('../models/Message');

const getAllMessages = (req, res, next) => {
    Message.getAll((results) => {
        req.messages = results;
        next();
    })
}

module.exports = { getAllMessages };