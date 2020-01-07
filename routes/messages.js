const express = require('express');
const router = express.Router();

router.post('/new', (req, res, next) => res.json({hello: 'world'}));

module.exports = router;
