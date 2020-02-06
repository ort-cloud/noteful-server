require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const { NODE_ENV } = require('./config');
/* const morganOption = (NODE_ENV === 'production' ? 'tiny' : 'common'); */
const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'

const foldersRouter = require('./folders/folders-router');
const notesRouter = require('./notes/notes-router');

app.use(morgan(morganSetting));
app.use(helmet());
app.use(cors());

app.use('/api/folders', foldersRouter);
app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use((error, req, res, next) => {
  let response
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' }}
  } else {
    response = { error }
  }
  res.status(500).json(response)
})

module.exports = app;
