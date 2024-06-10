## UML

### Instructions

You are in charge of designing a library management system. Use UML to create a class diagram representing the different entities and their relationships in the system.

The system should include the following entities:

1. **Book**:
   - Attributs: `bookID` (int), `title` (string), `author` (string), `publishedYear` (int)

2. **Member**:
   - Attributs: `memberID` (int), `name` (string), `email` (string)

3. **Librarian**:
   - Attributs: `librarianID` (int), `name` (string), `employeeNumber` (string)

4. **Loan**:
   - Attributs: `loanID` (int), `bookID` (int), `memberID` (int), `borrowDate` (date), `returnDate` (date)

Here is a textual representation of the UML class diagram. You must draw this diagram using a UML tool of your choice (such as draw.io, Lucidchart, or any other UML diagram software).

**All the relations have to be display on the MCD.
Make sure to think of all the relations and attributes your elements must have before starting to create the DB.**

### Expected Result

The expected result is a UML class diagram including the following elements:

- The table : `Book`, `Member`, `Librarian`, `Loan`
- The attributes for each class
- The relationships:
  - A `Member` can borrow several `Books` (one-to-many relationship).
  - A `Librarian` manages several `Loans` (one-to-many relationship).
  - A `Book` can be associated with several `Loans` (one-to-many relationship).



### Notions

- [UML Class Diagrams](https://www.uml-diagrams.org/class-diagrams-overview.html)
- [Linkedin Learning - UML Class Diagrams](https://www.linkedin.com/learning/uml-modelisation-d-une-base-de-donnees/definir-uml?u=56745737)
