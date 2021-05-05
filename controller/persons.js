const personsRouter = require('express').Router();
const Person = require('../models/person');

personsRouter.get('/', (req, res) => {
	Person.find({}).then((item) => {
		res.json(item);
	});
});

personsRouter.get('/info', (req, res) => {
	Person.countDocuments({}).then((count) => {
		const messageContent = `<p>Phone book has info for ${count} people</p><p>${new Date()}</p>`;
		res.send(messageContent);
	});
});

personsRouter.get('/:id', (req, res, next) => {
	const id = req.params.id;

	Person.findById(id)
		.then((person) => {
			if (person) {
				res.json(person);
			} else {
				res.status(404).end();
			}
		})
		.catch((error) => next(error));
});

personsRouter.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Person.findByIdAndDelete(id)
		.then(() => res.status(204).end())
		.catch((error) => next(error));
});

personsRouter.post('/', (req, res, next) => {
	const data = req.body;

	if (!data.name) {
		return res.status(400).json({ error: 'Name is missing' });
	} else if (!data.number) {
		return res.status(400).json({ error: 'Number is missing' });
	}

	const newEntry = new Person({
		name: data.name,
		number: data.number,
	});

	newEntry
		.save()
		.then((savedPerson) => savedPerson.toJSON())
		.then((savedAndFormattedPerson) => res.json(savedAndFormattedPerson))
		.catch((error) => next(error));
});

personsRouter.put('/:id', (req, res, next) => {
	const id = req.params.id;

	const entry = {
		name: req.body.name,
		number: req.body.number,
	};

	Person.findByIdAndUpdate(id, entry, { new: true })
		.then((updatedEntry) => {
			if (updatedEntry) {
				res.json(updatedEntry.toJSON());
			} else {
				res.status(404).end();
			}
		})
		.catch((error) => next(error));
});

module.exports = personsRouter;
