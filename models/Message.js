const connection = require('../db/config');

const Message = {};

Message.getAll = (callback) => {
    connection.query(`SELECT * FROM message`, (err, results, fields) => {
        if (err) next(err);

        callback(results)
    });
}

Message.create = (message, callback) => {
    connection.query(`INSERT INTO message (message) VALUES (?)`,
        message,
        (err, results, fields) => {
            callback(err)
        });
}


module.exports = Message;
