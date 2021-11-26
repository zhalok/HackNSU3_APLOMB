const nodemailer = require('nodemailer');
const send_email = (from, to, callback) => {
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
		subject: `Appointment Request from ${from} at 5:00 pm on 21 Dec,2021`,
		text: `${from} wanted to schedule an online appointment with you please send approve a request. Appointment time  at 5:00 pm on 21 Dec,2021`,
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
