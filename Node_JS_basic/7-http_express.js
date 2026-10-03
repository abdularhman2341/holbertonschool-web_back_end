const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = express();

app.get('/', (request, response) => {
  response.type('text/plain');
  response.status(200).send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(database)
    .then((output) => {
      response.type('text/plain');
      response.status(200).send(
        `This is the list of our students\n${output}`,
      );
    })
    .catch((error) => {
      response.type('text/plain');
      response.status(200).send(
        `This is the list of our students\n${error.message}`,
      );
    });
});

app.listen(1245);

module.exports = app;
