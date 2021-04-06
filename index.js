const express = require('express');
const app = express();

app.use(express.json());

let notes = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: 2,
		name: 'Second',
		number: '040-123456',
	},
	{
		id: 3,
		name: 'Third',
		number: '0412323456',
	},
];

app.get('/api/persons', (req, res) => {
	res.json(notes);
});

const total = notes.length;

app.get('/info', (req, res) => {
	const date = new Date();

	res.send(`<p>Phone book has info for ${total} people.</p></br>
    <p>${date.getHours} : ${date.getMinutes}</p>
    `);
});

const generateId = () => {
	const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
	return maxId + 1;
};

app.post('/api/persons', (request, response) => {
	const body = request.body;

	if (!body.content) {
		return response.status(400).json({
			error: 'content missing',
		});
	}

	const note = {
		name: body.name,
		number: body.number,

		id: generateId(),
	};

	notes = notes.concat(note);

	response.json(note);
});

app.get('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	const note = notes.find((note) => note.id === id);

	if (note) {
		response.json(note);
	} else {
		response.status(404).end('not found');
	}
});

app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	notes = notes.filter((note) => note.id !== id);

	response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
