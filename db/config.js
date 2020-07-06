const mysql = require('mysql');

const dbOptions = {
    host: 'localhost',
    user: 'root',
    pass: 'root',
    db: 'websockets_lesson',
}
const dbURL = `mysql://${dbOptions.user}:${dbOptions.pass}@${dbOptions.host}/${dbOptions.db}`
const connection = mysql.createConnection(dbURL);

module.exports = connection;