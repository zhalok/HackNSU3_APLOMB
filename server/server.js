const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
	'mongodb+srv://zhalok:03041959@cluster0.3e15a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	() => {
		console.log('connected to database');
	}
);

app.listen(5000, () => {
	console.log(`Server started at port ${5000}`);
});
