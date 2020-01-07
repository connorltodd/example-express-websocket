const connection = require('./config');

const createUsers = new Promise(
    (resolve, reject) => connection.query(`CREATE TABLE user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(320) NOT NULL UNIQUE,
        passwordHash CHAR(64) NOT NULL
    )`, (err) => {
        if(err) reject(err);
        console.log('User table created');
        resolve();
    })
);

const createMessages = new Promise(
    (resolve, reject) => connection.query(`CREATE TABLE message (
        id INT AUTO_INCREMENT PRIMARY KEY,
        message VARCHAR(320) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`, (err) => {
        if(err) reject(err);
        console.log('Message table created');
        resolve();
    })
);

createUsers
    .then(() => 
        createMessages
            .then(() => 
                console.log('OK!')
            )
            .then(() => 
                connection.end()
            )
    )
    .catch(err => {
        console.log(err);
        connection.end();
    });