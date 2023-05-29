import { getDbClient } from "./dbClient.js";
import { ObjectId } from "mongodb";

const { dbClient, collectionName } = await getDbClient();
const errMessage = { message: "💩oopsy! An error occurred." };

const collectionClient = dbClient.collection(collectionName);

/* Get: All Docs
******************************* */
export async function getAllDocs() {

  const collection = await collectionClient;
}
