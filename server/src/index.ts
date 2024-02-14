import express from 'express';
import dotenv from 'dotenv';
import { Database } from './config/database';
import { mongodb_database, uri } from './helpers/mongodb_info';

dotenv.config();

const app = express();
const db = new Database(uri, mongodb_database);

app.get('/', async (req, res) => {
	try {
		const users = await db.get('users');
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: error });
	}
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
