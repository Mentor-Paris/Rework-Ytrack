# Exercise: Creating and Using Primary Keys in SQL

## Instructions

### Create a Table with a Primary Key
Create a table called `Students` with the following columns:
- `StudentID` (Primary Key)
- `FirstName`
- `LastName`
- `EnrollmentDate`

### Insert Data into the Table
Insert the following records into the `Students` table:

- `(1, 'Alice', 'Johnson', '2020-06-15')`
-  `(2, 'Bob', 'Smith', '2019-03-22')`
- `(3, 'Charlie', 'Brown', '2021-09-10')`

### Expected Result

![alt text](image.png)

### Notions

- Definition : 

A primary key is a field (or a set of fields) in a table that uniquely identifies each record in that table. It ensures that each record can be uniquely retrieved and serves as the main identifier for table rows.

- Structure : 


Unique: Each value in the primary key field(s) must be unique across the table.

Non-nullable: Primary key fields cannot contain NULL values.

- Function : 


    The primary key serves several critical functions in a database:

    Unique Identification: Ensures that each row in the table can be uniquely identified.

    Indexing: Most database systems automatically create an index on the primary key, which speeds up query performance.

    Referencing: Primary keys are often referenced by foreign keys in other tables, creating relationships between tables.

- Characteristics :


    Uniqueness: No two rows in a table can have the same primary key value.

    Non-null: Primary key fields must always have a value.

    Immutable: The value of a primary key should not change over time

- Advantages of Primary Keys :


    Data Integrity: Ensures that each record can be uniquely identified, which is essential for maintaining accurate and reliable data.

    Efficient Data Retrieval: The unique index created on the primary key field(s) can significantly speed up data retrieval operations.

    Relationship Building: Serves as a reference point for foreign keys in other tables, facilitating the creation of relationships between tables.

- For examples visit the site below :

[sql.sh/cours/primary_key] (https://sql.sh/cours/create-table/primary-key)