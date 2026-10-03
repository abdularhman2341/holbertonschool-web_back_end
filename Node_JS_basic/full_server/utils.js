import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      const fields = {};
      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '')
        .slice(1);

      lines.forEach((line) => {
        const columns = line.split(',');
        const firstName = columns[0].trim();
        const field = columns[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      });

      resolve(fields);
    });
  });
}

export default readDatabase;
