CREATE TABLE STUDENTS (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO STUDENTS (name, age, address) VALUES ('Clark', 35, 'Florida');
INSERT INTO STUDENTS (name, age, address) VALUES ('Dave', 29, 'LA');
INSERT INTO STUDENTS (name, age, address) VALUES ('Jhon', 18, 'Moscow');
INSERT INTO STUDENTS (name, age, address) VALUES ('Sara', 17, 'NY');
INSERT INTO STUDENTS (name, age, address) VALUES ('Mike', 24, 'Moscow');
INSERT INTO STUDENTS (name, age, address) VALUES ('Bob', 48, 'Seattle');
INSERT INTO STUDENTS (name, age, address) VALUES ('Steve', 25, 'Moscow');



-- fetch 
SELECT name 
FROM 
  STUDENTS 
WHERE 
  address = 'Moscow'
  AND age >= 18
  AND age < 30
;
