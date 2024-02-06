
SELECT *
FROM users JOIN pets
    ON users.id = pets.user_id
WHERE users.id = 1;

SELECT u.first_name, u.last_name, p.name, p.species
FROM users u JOIN pets p
    ON u.id = p.user_id;


SELECT *
FROM users JOIN pets
    ON users.id = pets.user_id
ORDER BY users.age;


SELECT *
FROM users JOIN pets
    ON users.id = pets.user_id
ORDER BY users.age DESC;

SELECT u.first_name, COUNT(u.first_name)
FROM users u JOIN pets p
    ON u.id = p.user_id
GROUP BY (u.first_name)
ORDER BY u.first_name;

SELECT *, NOW()
FROM pets;