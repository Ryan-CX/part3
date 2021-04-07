const express = require('express');
const app = express();
const baseUrl = 'http://localhost:3001/api/notes';
const morgan = require('morgan');
app.use(express.json());
app.use(morgan('tiny'));

morgan.token('data', function (req, res) {
	if (req.method == 'POST') {
		return '' + JSON.stringify(req.body);
	} else {
		return '';
	}
});

const requestLogger = (req, res, next) => {
	//define a middleware to logger the request history.
	console.log('Method:', req.method);
	console.log('Path:', req.path);
	console.log('Body:', req.body);
	next();
};
app.use(requestLogger);

let notes = [
	{
		id: 1,
		content: 'HTML is easy',
		date: '2020-01-10T17:30:31.098Z',
		important: true,
	},
	{
		id: 2,
		content: 'Browser can execute only Javascript',
		date: '2020-01-10T18:39:34.091Z',
		important: false,
	},
	{
		id: 3,
		content: 'GET and POST are the most important methods of HTTP protocol',
		date: '2020-01-10T19:20:14.298Z',
		important: true,
	},
];

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

app.get('/info', (req, res) => {
	const date = new Date();

	res.send(
		`<p>Phone book has info for ${
			notes.length
		} people.</p></br><p>${date.toUTCString()}</p>`
	);
});

app.get('/api/persons', (req, res) => {
	res.send(notes);
});

const generateId = () => {
	const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
	return maxId + 1;
};

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id);
	const note = notes.find((note) => note.id === id);
	if (note) {
		res.json(note);
	} else {
		res.status(404).end('Person not found');
	}
});

app.post('/api/persons', (req, res, next) => {
	const body = req.body;
	if (!body.content) {
		return res.status(400).json({
			error: 'content missing.',
		});
	}
	const note = {
		content: body.content,
		important: body.important || false,
		date: new Date(),
		id: generateId(),
	};
	notes = notes.concat(note);
	res.json(note);
});

app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	notes = notes.filter((note) => note.id !== id);

	response.status(204).end('Delete Successfully.');
});

const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: 'Unknown Endpoint.' });
};
app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
