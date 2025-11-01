-- Database তৈরি করা
CREATE DATABASE IF NOT EXISTS university;

-- Database ব্যবহার করা
USE university;-- ডেটা দেখা
SELECT * FROM students;-- কিছু ডেটা insert করা
INSERT INTO students (name, department, gpa)
VALUES 
('Arafat', 'CSE', 3.85),
('Nabila', 'EEE', 3.70),
('Rafiul', 'BBA', 3.92);

-- Table তৈরি করা
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  department VARCHAR(50),
  gpa DECIMAL(3,2)
);

-- কিছু ডেটা insert করা
INSERT INTO students (name, department, gpa)
VALUES 
('Arafat', 'CSE', 3.85),
('Nabila', 'EEE', 3.70),
('Rafiul', 'BBA', 3.92);

-- ডেটা দেখা
SELECT * FROM students;
