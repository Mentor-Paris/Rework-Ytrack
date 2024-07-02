# Exercise: Creating and Using Foreign Keys in SQL

**Objective:** Create a table called `Enrollments` that will reference the existing `Students` table using a foreign key relationship. This will allow you to track student enrollments in different courses.

## Instructions

### Create the Enrollments Table with a Foreign Key

Create a table called `Enrollments` with the following columns:
- `EnrollmentID` (Primary Key)
- `StudentID` (Foreign Key referencing `Students.StudentID`)
- `CourseName`
- `EnrollmentDate`

### Insert Data into the Enrollments Table
Insert the following records into the Enrollments table:

- `(1, 1, 'Math', '2023-01-10')`
- `(2, 2, 'Science', '2023-01-15')`
- `(3, 3, 'History', '2023-01-20')`
- `(4, 1, 'Science', '2023-02-05')`

### Expected Result

![alt text](image.png)

### Notions
- Definition

A foreign key is a field (or a set of fields) in one table that uniquely identifies a row of another table. It is used to ensure referential integrity of the data, meaning that relationships between tables remain consistent.

- Structure

Reference Table: The table that contains the primary key, which is the field or set of fields that uniquely identifies each record in this table.
Referenced Table: The table that contains the foreign key, which is the field or set of fields that references the primary key in the reference table.

- Function

Primary Key: One or more fields in a table that uniquely identify each record in that table. For example, in an Employees table, the primary key could be EmployeeID.
Foreign Key: A field in a table that corresponds to the primary key in another table, creating a relationship between the two tables. For example, in a Projects table, a field EmployeeID could be a foreign key referencing EmployeeID in the Employees table.

- Advantages of Foreign Keys

Data Integrity: Ensures that relationships between tables remain valid.
Normalization: Helps organize data efficiently by avoiding redundancy.
Navigation: Facilitates navigation between related tables, which is useful for joins.

- For more exmples visit the site below: 

 [sql.sh/cours/jointures] (https://sql.sh/cours/jointures)