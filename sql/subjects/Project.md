# E-Commerce SQL

## Notions
* [Introduction CDM](https://www.it-connect.fr/introduction-au-mcd/)
* [SQL : Installation PhpMyAdmin](https://kinsta.com/fr/blog/installer-phpmyadmin/)
* [Vidéo: Fake Data in PHP](https://www.youtube.com/watch?v=sSDh1zfz-5s)
* [Faker PHP](https://zetcode.com/php/faker/)
* [SQL : Syntax](https://sql.sh/cours)

## Instructions

The goal of this project is to make the databse of an e-commerce website.

Create a repository `e-commerce-SQL`. Put all of your files in this folder.

### MCD

First, you will have to make an MCD (Conceptual Data model) of the database --> You can use [draw.io](https://app.diagrams.net/) or anything else to make it.   

If you use draw.io, select this model **Software** --> first model

![image](https://user-images.githubusercontent.com/56391911/180769820-35ed5933-82f4-41eb-b79e-f43b43500fd1.png)

All the relations have to be display on the MCD.

**Make sure to think of all the relations and attributes your elements must have before starting to create the DB**

### DataBase

Next, create the database using the PhpMyAdmin tool or command line. 

Your database must contain the followings tables and must respect exactly your MCD: 
* user table : informations about users
* adress table : adress from users
* product table : Product selling from your website
* cart table: user cart (list of items waiting to be purchased)
* command table: user shopping list (list of items being delivered)
* invoices table: order history
* all the junction table

All the private informations must be crypted !

**Optional table** 
* photo table : photos of users and products
* rate table : product rating from users
* payment table : payment method from users with informations (IBAN, card number, etc...)

### Fixtures

Finally, make a script in the language of you choice (PHP seems to be a perfect fit) that can fill the database with fake **but relevant** data.
It can be a script full of SQL commands, or a script in a certain language that perform SQL Queries with generated data.

For example, the library [Faker](https://github.com/fzaninotto/Faker) in js can help you generate relevant but random data. You have some other examples [here](https://dev.to/iainfreestone/20-resources-for-generating-fake-and-mock-data-55g1).
