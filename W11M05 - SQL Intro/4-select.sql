SELECT * -- * means select all columns
FROM users;

SELECT first_name, last_name, age
FROM users;

SELECT last_name AS "Last Name", first_name AS "First Name", age AS "Age"
FROM users;

SELECT *
FROM users
WHERE age >= 25;

SELECT *
FROM users
WHERE age >= 25 AND first_name = 'Alex';

SELECT *
FROM users
WHERE first_name LIKE 'A%';

SELECT *
FROM users
WHERE email LIKE '%er%';

SELECT *
FROM pets
LIMIT 2;

SELECT *
FROM pets
LIMIT 3
OFFSET 3;