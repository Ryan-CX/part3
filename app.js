const express = require('express');
const app = express();
const personsRouter = require('./controller/persons');
const mongoose = require('mongoose');
const config = require('./utils/config');
const cors = require('cors');
const middleware = require('./utils/middleware');

mongoose
	.connect(config.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('connected to MongoDB');
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message);
	});

app.use(cors());

app.use(express.static('build'));
app.use(express.json());
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
app.use(
	middleware.morgan(
		':method :url :status :res[content-length] :response-time ms :entry'
	)
);
app.use(
	middleware.morgan.token('entry', (req) => {
		if (req.method === 'POST') {
			return JSON.stringify(req.body);
		}
	})
);
app.use('/api/persons', personsRouter);

module.exports = app;
