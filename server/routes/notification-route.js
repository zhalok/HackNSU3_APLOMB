const express = require('express');
const sendNotification = require('../controllers/sendNotification');
const router = express.Router();

router.post('/to_doctor', sendNotification.send_email_to_doctor);

module.exports = router;
