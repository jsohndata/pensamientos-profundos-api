import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
require('dotenv').config({ path: '../../config/.env-mongo' });

const { MONGO_URI } = process.env;
const { DB_NAME } = process.env;
const COLLECTION_NAME = "quotes";

export async function getDbClient() {
  const mongo = new MongoClient(MONGO_URI);

  await mongo.connect();

  const dbClient = mongo.db(DB_NAME);

  return({
    dbClient,
    collectionName: COLLECTION_NAME
  });
}