import fs from 'fs';
import path from 'path';

export const tests = [];

const t = (f) => tests.push(f);

t(({ eq }) => {
  const filePath = path.resolve(__dirname, 'create_students_table.sql');

  const exists = fs.existsSync(filePath);
  eq(exists, true);

  if (exists) {
    const content = fs.readFileSync(filePath, 'utf8').trim();
    const expectedContent = `
      CREATE TABLE Students (
        StudentID INT PRIMARY KEY,
        FirstName VARCHAR(50),
        LastName VARCHAR(50),
        EnrollmentDate DATE
      );
    `.trim();

    eq(content, expectedContent);
  }
});
