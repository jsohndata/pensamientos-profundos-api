import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const rootUri = process.cwd();

/* Root and 404 */
app.get("/", (req,res) => {
  res.status(200).send("I am gRoot");
});

app.get("*", (req,res) => {
  res.status(404).send("404 Not Found");
});

export const api = functions.https.onRequest(app);