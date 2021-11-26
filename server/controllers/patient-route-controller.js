const patientModel = require('../models/patient_model');

const patient_route_controller = {};
patient_route_controller.add_patient = (req, res, next) => {
	const { name, password, email, gender, phone, adress } = req.body;
	const newPatient = new patientModel({
		name,
		password,
		email,
		gender,
		phone,
		adress,
	});
	newPatient.save((err) => {
		if (err) {
			next(err);
		} else {
			res.json('patient information saved');
		}
	});
};

module.exports = patient_route_controller;
