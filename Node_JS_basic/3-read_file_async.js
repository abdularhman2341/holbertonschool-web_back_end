const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      const students = lines.slice(1);
      const fields = {};

      students.forEach((student) => {
        const values = student.split(',').map((value) => value.trim());
        const firstName = values[0];
        const field = values[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      });

      const output = [`Number of students: ${students.length}`];

      Object.keys(fields).forEach((field) => {
        const count = fields[field].length;
        const names = fields[field].join(', ');

        output.push(
          `Number of students in ${field}: ${count}. List: ${names}`,
        );
      });

      output.forEach((line) => console.log(line));

      resolve(output.join('\n'));
    });
  });
}

module.exports = countStudents;
