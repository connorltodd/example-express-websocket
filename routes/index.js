const express = require('express');
const router = express.Router();
const { showHomepage } = require('../controllers/pages-controller');
const { getAllMessages } = require('../controllers/messages-controller');

/* GET home page. */
router.get('/', getAllMessages, showHomepage)

module.exports = router;
