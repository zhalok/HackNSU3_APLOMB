const express = require('express');
const patient_route_controller = require('../controllers/patient-route-controller');
const router = express.Router();

router.post('/', patient_route_controller.add_patient);

module.exports = router;
