const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(database)
      .then((output) => {
        response.statusCode = 200;
        response.end(`This is the list of our students\n${output}`);
      })
      .catch((error) => {
        response.statusCode = 200;
        response.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    response.statusCode = 404;
    response.end();
  }
});

app.listen(1245);

module.exports = app;
