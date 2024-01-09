import * as dotenv from 'dotenv';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../.env'); // Chemin absolu vers le fichier .env

const result = dotenv.config({ path: envPath });

export const environment = {
  production: false,
  apiKey: result.parsed?.['API_KEY'] || 'mongodb+srv://admin:TheNiche1234@clustertheniche.dzl3a3c.mongodb.net/?retryWrites=true&w=majority',
  dbPassword: result.parsed?.['DB_PASSWORD'] || 'TheNiche1234',
};
