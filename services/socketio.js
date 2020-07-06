// services/socketio.js

const io = require('socket.io')();
const Message = require('../models/Message');

io.on('connect', (socket) => {

    socket.on('message', (message) => {
        Message.create(message, (err) => {
            if (err) {
                console.log('error', err);
            } else {
                io.emit('new message', { message: message });
            }
        })
    });
});

module.exports = io
