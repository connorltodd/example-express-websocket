const connection = require('./config');

const truncateUsers = new Promise((resolve, reject) =>
    connection.query(
        `TRUNCATE user`,
        (err) => {
            if(err) return reject(err);
            console.log('Users reset');
            resolve();
        }
    )
)
const truncateMessages = new Promise((resolve, reject) =>
    connection.query(
        `TRUNCATE message`,
        (err) => {
            if(err) return reject(err);
            console.log('Messages reset');
            resolve();
        }
    )
)

const seedUsers = new Promise((resolve, reject) =>
    connection.query(
        `INSERT INTO user (email, passwordHash) VALUES (
        'user@user.com',
        SHA2('0000', 256)
        )`,
        (err) => {
            if(err) return reject(err);
            console.log('Users seeded');
            resolve();
        }
    )
)

const seedMessages = new Promise((resolve, reject) =>
    connection.query(`INSERT INTO message (message) VALUES
    ('Hey'),
    ('How are you?'),
    ('My name is Alice')`,
    (err) => {
            if(err) return reject(err);
            console.log('Messages seeded');
            resolve();
        }
    )
)

truncateUsers
    .then(() =>
        truncateMessages
            .then(() =>
                seedUsers
                    .then(() => 
                        seedMessages
                            .then(() =>
                                connection.end()
                            )
                    )
            )
    )
    .catch(err => {
        console.log(err);
        connection.end();
    });
