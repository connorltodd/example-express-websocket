const connection = require('../db/config');

const Message = {};

Message.getAll = (callback) => {
    connection.query(`SELECT * FROM message`, (err, results, fields) => {
        if(err) next(err);

        callback(results)
    });
}

module.exports = Message;
