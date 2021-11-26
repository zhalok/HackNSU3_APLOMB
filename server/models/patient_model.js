const mongoose = require('mongoose');
const schema = new mongoose.Schema({
	name: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true },
	gender: { type: String, required: true },
	phone: { type: String, required: true },
	adress: { type: String, required: true },
});
module.exports = mongoose.model('Patients', schema);
