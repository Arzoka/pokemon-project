// src/config/db.ts

import { MongoClient, ServerApiVersion } from 'mongodb';

export class Database {
	private uri: string;
	private client: MongoClient;
	private database: string;

	constructor(uri: string, database: string) {
		this.uri = uri;
		this.database = database;
		this.client = new MongoClient(uri, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});
	}

	async connect() {
		try {
			await this.client.connect();
			await this.client.db('admin').command({ ping: 1 });
			console.log('Pinged your deployment. You successfully connected to MongoDB!');
			return this.client.db(this.database);
		} catch (error) {
			console.error('Error connecting to MongoDB:', error);
			throw error;
		}
	}

	async get(schema_name: string) {
		try {
			const collection = await this.connect();
			return collection.collection(schema_name).find({}).toArray();
		} catch (error) {
			console.error('Error getting collection:', error);
			throw error;
		}
	}

	async close() {
		try {
			await this.client.close();
			console.log('Closed MongoDB connection.');
		} catch (error) {
			console.error('Error closing MongoDB connection:', error);
			throw error;
		}
	}
}
