const nodemailer = require('nodemailer');
const send_email = (from, to, subject, body, callback) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'zhalokrahman007@gmail.com',
			pass: process.env.AUTH_PASS,
		},
	});

	var mailOptions = {
		from: 'zhalokrahman007@gmail.com',
		to: to,
		subject: `Appointment Request from ${from}`,
		text: `${from} wanted to schedule an online appointment with you please send her a request`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			callback(error);
		} else {
			callback(null, 'email sent to doctor');
		}
	});
};

module.exports = send_email;
