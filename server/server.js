const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const patient_route = require('./routes/patietn-route');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/patients', patient_route);

mongoose.connect(
	'mongodb+srv://zhalok:03041959@cluster0.3e15a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	() => {
		console.log('connected to database');
	}
);

app.listen(5000, () => {
	console.log(`Server started at port ${5000}`);
});
