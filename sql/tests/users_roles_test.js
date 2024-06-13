import fs from 'fs';
import path from 'path';

export const tests = [];

const t = (f) => tests.push(f);

t(({ eq }) => {
  const createUserFilePath = path.resolve(__dirname, 'create_user.sql');

  const fileExists = fs.existsSync(createUserFilePath);
  eq(fileExists, true);

  if (fileExists) {
    const content = fs.readFileSync(createUserFilePath, 'utf8').trim();
    const expectedContent = `
      CREATE USER 'student_user'@'localhost' IDENTIFIED BY 'securepassword123';
      GRANT SELECT, INSERT, UPDATE, DELETE ON Students.* TO 'student_user'@'localhost';
    `.trim();

    eq(content, expectedContent);
  }
});
