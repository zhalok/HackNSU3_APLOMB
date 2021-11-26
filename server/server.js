const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const patient_route = require('./routes/patietn-route');
const notification_route = require('./routes/notification-route');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/patients', patient_route);
app.use('/send_notification', notification_route);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow_Headers', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	next();
});

mongoose.connect(
	'mongodb+srv://zhalok:03041959@cluster0.3e15a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	() => {
		console.log('connected to database');
	}
);

app.listen(process.env.PORT || 5000, () => {
	console.log(`Server started at port ${process.env.PORT}`);
});
