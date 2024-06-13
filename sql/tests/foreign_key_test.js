import fs from 'fs';
import path from 'path';

export const tests = [];

const t = (f) => tests.push(f);

t(({ eq }) => {
  const studentsFilePath = path.resolve(__dirname, 'create_students_table.sql');
  const enrollmentsFilePath = path.resolve(__dirname, 'create_enrollments_table.sql');

  const studentsTableExists = fs.existsSync(studentsFilePath);
  const enrollmentsTableExists = fs.existsSync(enrollmentsFilePath);

  eq(studentsTableExists, true);
  eq(enrollmentsTableExists, true);

  if (studentsTableExists && enrollmentsTableExists) {
    const studentsContent = fs.readFileSync(studentsFilePath, 'utf8').trim();
    const enrollmentsContent = fs.readFileSync(enrollmentsFilePath, 'utf8').trim();

    const expectedStudentsContent = `
      CREATE TABLE Students (
        StudentID INT PRIMARY KEY,
        FirstName VARCHAR(50),
        LastName VARCHAR(50)
      );
    `.trim();

    const expectedEnrollmentsContent = `
      CREATE TABLE Enrollments (
        EnrollmentID INT PRIMARY KEY,
        StudentID INT,
        CourseName VARCHAR(100),
        EnrollmentDate DATE,
        FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
      );
    `.trim();

    eq(studentsContent, expectedStudentsContent);
    eq(enrollmentsContent, expectedEnrollmentsContent);
  }
});
