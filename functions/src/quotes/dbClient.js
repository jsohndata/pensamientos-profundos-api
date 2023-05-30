import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config( {path: './config/.env'} );

const {MONGO_URI} = process.env;
const {DB_NAME} = process.env;
const COLLECTION_NAME = "quotes";


export async function getDbClient() {
  try {
    const mongo = new MongoClient(MONGO_URI);

    await mongo.connect();

    const dbClient = mongo.db(DB_NAME);

    return({
      dbClient,
      collectionName: COLLECTION_NAME
    });
  } catch (err) {
      console.error('An error occurred while connecting to the database:', error);
  }
}
