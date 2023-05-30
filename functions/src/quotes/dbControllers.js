import {getDbClient} from "./dbClient.js";
import {ObjectId} from "mongodb";

const {dbClient, collectionName} = await getDbClient();
const errMessage = { message: "💩oopsy! An error occurred." };

const collectionClient = dbClient.collection(collectionName);


/* Get: All Docs
******************************* */
export async function getAllDocs(req, res) {

  const collection = await collectionClient
    .find({})
    .limit(10)
    .toArray()
    .catch(err => res.status(500).send(errMessage));
}


/* Get: One Doc by Id
******************************* */
export async function getOneDocById(req, res) {
  const { id } = req.params;

  const collection = await collectionClient
    .findOne( { _id: new ObjectId(id) } )
    .catch(err => res.status(500).send(errMessage));
}
