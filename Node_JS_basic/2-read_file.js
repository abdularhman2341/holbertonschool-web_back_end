const fs = require('fs');

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }

  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    if (error.code) {
      throw new Error('Cannot load the database');
    }
    throw error;
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

  console.log(`Number of students: ${students.length}`);

  Object.keys(fields).forEach((field) => {
    const count = fields[field].length;
    const names = fields[field].join(', ');

    console.log(
      `Number of students in ${field}: ${count}. List: ${names}`,
    );
  });
}

module.exports = countStudents;