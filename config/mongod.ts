import { MongoClient } from 'https://deno.land/x/mongo@v0.8.0/mod.ts';

import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

const monog_host = env.MONGO_HOST;
const mongo_db = env.MONGO_DB;
const mongo_port = env.MONGO_PORT;

const client = new MongoClient();

client.connectWithUri(`mongodb://${monog_host}:${mongo_port}`);

const db = client.database(`${mongo_db}`);

export default db;
