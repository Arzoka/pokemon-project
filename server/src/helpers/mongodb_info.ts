import dotenv from 'dotenv';

dotenv.config();

if (!process.env.mongodb_username || !process.env.mongodb_password || !process.env.mongodb_cluster || !process.env.mongodb_database) {
	console.error('Missing environment variables for MongoDB. Did you copy the .env.example file to .env?');
	process.exit(1);
}

const {
	mongodb_username,
	mongodb_password,
	mongodb_cluster,
	mongodb_database,
} = process.env;

const encodedUsername = encodeURIComponent(mongodb_username);
const encodedPassword = encodeURIComponent(mongodb_password);

const uri = `mongodb+srv://${ encodedUsername }:${ encodedPassword }@${ mongodb_cluster }.tlw1rwn.mongodb.net/${ mongodb_database }?retryWrites=true&w=majority`;


export { uri, mongodb_database };
