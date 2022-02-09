import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = await new MongoClient(process.env.MONGO_URI).connect();
const db = mongoClient.db("api-feira-brasil");

export default db;