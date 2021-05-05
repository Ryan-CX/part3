require('dotenv').config();
const PORT = process.env.PORT || 3001;
const url = process.env.mongo_url;

module.exports = {
	url,
	PORT,
};
