import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import schema from './schema/';

const app = express();
const PORT = process.env.PORT || '4000';
const db = 'mongodb://Chigoziem:chigodwin123@ds121026.mlab.com:21026/fluido-db';

mongoose
  .connect(db, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(error => console.log(error));

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({ schema, graphiql: true })
);

app.listen(PORT, () => {
  console.log(`Listening for resquest on port ${PORT}`);
});
