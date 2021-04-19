const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('build'));

morgan.token('data', function (req) {
	if (req.method == 'POST') {
		return JSON.stringify(req.body);
	} else {
		return '';
	}
});

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method);
	console.log('Path:  ', request.path);
	console.log('Body:  ', request.body);
	console.log('---');
	next();
};

app.use(requestLogger);

let persons = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: 2,
		name: 'Ada LoveLace',
		number: '040-123456',
	},
	{
		id: 3,
		name: 'Dan HeDeboldllas',
		number: '042-123456',
	},
	{
		id: 4,
		name: 'Mary Poppendick',
		number: '040-12345556',
	},
];

app.get('/persons', (req, res) => {
	res.json(persons);
});
app.get('/info', (req, res) => {
	res.send(`phonebook has ${persons.length} people </br><p>${new Date()}</p>`);
});
const generateId = () => {
	const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
	return maxId + 1;
};

app.post('/persons', (request, response) => {
	const body = request.body;

	if (!body.name) {
		return response.status(400).json({
			error: 'content missing',
		});
	}

	const person = {
		id: generateId(),
		name: body.name,
		number: body.number,
	};

	persons = persons.concat(person);

	response.json(person);
});

app.get('/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	const person = persons.find((person) => person.id === id);

	if (person) {
		response.json(person);
	} else {
		response.status(404).end();
	}
});

app.delete('/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter((person) => person.id !== id);

	response.status(204).end();
});

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
