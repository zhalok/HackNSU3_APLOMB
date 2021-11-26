const sendEmail = require('../Utils/sendEmail');

const sendNotification = {};

sendNotification.send_email_to_doctor = (req, res, next) => {
	const { doctors_email, patient_name } = req.body;
	sendEmail(patient_name, doctors_email, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(data);
		}
	});
};

module.exports = sendNotification;
