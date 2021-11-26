const sendEmail = require('../Utils/sendEmail');

const sendNotification = {};

sendNotification.send_email_to_doctor = (req, res, next) => {
	const { doctors_email, patient_name } = req.body;
};
