'use strict';
import express from 'express';
import cors from 'cors';
import catRoute from './routes/catRoute';
import userRoute from './routes/userRoute';

const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
  }

app.use(cors(corsOptions));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
