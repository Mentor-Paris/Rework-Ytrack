# Exercise: Creating a User in SQL for Database "Students"

**Objective:** Create a new user account in MySQL for the `Students` database and grant appropriate privileges to the user.

## Instructions

### Create a New User

Create a new user named `student_user` with the password `securepassword123`.

### Grant Privileges
Grant the following privileges to the `student_user` on the `Students` database:

- SELECT
- INSERT
- UPDATE
- DELETE

### Expected Result

The user `student_user` with password `securepassword123` should be created.
The `student_user` should have SELECT, INSERT, UPDATE, and DELETE privileges on all tables in the 'Students' database.

### Notions

In SQL, users and roles are fundamental concepts for managing access to databases and their objects. Understanding these concepts is crucial for database security and effective administration. Here’s a detailed explanation:

- Users in SQL :
    Users represent individual entities (people, applications, or systems) that can interact with the database. Each user has a unique identifier and associated credentials, such as a username and password, to authenticate and authorize access.

- Key Points about Users: 

     Creation: Users are created by database administrators using SQL commands.

    Authentication: Users need to provide the correct credentials to access the database.

    Permissions: Users can be granted specific permissions or privileges that define what actions they can perform on the database objects (like tables, views, procedures, etc.)Permissions are granted using the GRANT command.

    Account Management: Administrators can manage user accounts, including changing passwords, renaming users, and removing users using commands like ALTER USER, RENAME USER,
    and DROP USER.

- Roles in SQL : 

    Roles are a way to simplify the management of permissions by grouping privileges together. Instead of assigning permissions directly to individual users, you assign roles to users. Roles can also be assigned to other roles, creating a hierarchy.

