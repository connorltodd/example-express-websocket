Add you mysql credentials in a `keys.js` in the root folder:
```javascript
const keys = {
    MYSQL_PASSWORD: 'my-nice-password',
    MYSQL_USERNAME: 'root',
    MYSQL_DB_NAME: 'nice-database-name'
}

module.exports = keys;
```

Create **a test user and some messages**:
```
yarn db:create
yarn db:seed
```

Run the app locally:
```
yarn dev
```

Test user credentials:
```
email: user@user.com
password: 0000
```
