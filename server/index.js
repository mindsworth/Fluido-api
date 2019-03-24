import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

dotenv.config();

const app = express();
const PORT = process.env.PORT || '4000';
const db = process.env.DATABASE_URL;

mongoose
  .connect(db, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(error => console.log(error));

app.use('/graphql', cors(), bodyParser.json(), expressGraphQL({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`Listening for here resquest on port ${PORT}`);
});
