import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((students) => {
        const messages = ['This is the list of our students'];

        const fields = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        fields.forEach((field) => {
          const names = students[field].join(', ');
          const fieldMessage = [
            `Number of students in ${field}: ${students[field].length}. `,
            `List: ${names}`,
          ].join('');

          messages.push(fieldMessage);
        });

        response.type('text/plain');
        response.status(200).send(messages.join('\n'));
      })
      .catch(() => {
        response.type('text/plain');
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.type('text/plain');
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((students) => {
        const names = students[major].join(', ');

        response.type('text/plain');
        response.status(200).send(`List: ${names}`);
      })
      .catch(() => {
        response.type('text/plain');
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
