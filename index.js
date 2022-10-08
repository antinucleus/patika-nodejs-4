import { writeFile, readFile, appendFile, unlink } from 'node:fs';

const fileName = 'employees.json';
const content = { name: 'Employee 1 Name', salary: 2000 };

const generalCallback = (error, data) => {
  if (error) console.log(error.message);

  if (data) console.log(data);
};

writeFile(fileName, JSON.stringify(content), generalCallback);

readFile(fileName, 'utf-8', generalCallback);

content.name = 'Employee 2 Name';
content.salary = 3000;

appendFile(fileName, `\n${JSON.stringify(content)}`, generalCallback);

unlink(fileName, generalCallback);
