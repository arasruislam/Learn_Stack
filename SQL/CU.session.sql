CREATE DATABASE LearnDB;

USE LearnDB;

CREATE TABLE Books (
  book_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  autthor VARCHAR(100),
  category VARCHAR(100)
);

CREATE TABLE Members(
  member_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  membership_date VARCHAR(100)
);

CREATE TABLE Borrow(
  borrow_id INT PRIMARY KEY AUTO_INCREMENT,
  book_id INT,
  member_id INT,
  borrow_date VARCHAR(100),
  return_date VARCHAR(100),

  FOREIGN KEY (book_id) REFERENCES Books(book_id),
  FOREIGN KEY (member_id) REFERENCES Members(member_id)
);

-- Insert data
INSERT INTO Books (title, autthor, category) VALUES
("connecting the dot", "HM nayemm", "programming"),
("hablu programming", "Jhunkhar", "programming"),
("C programming", "Mahabub", "cp"),
("C programming", "Mahabub", "Science");

INSERT INTO Members(name, membership_date) VALUES
("ashraful", "12th october 2025"),
("saifur", "10th october 2025"),
("nipon", "5th october 2025");

INSERT INTO Borrow (book_id, member_id, borrow_date, return_date) VALUES
(1, 1, "20th october 2025", "10th september 2025"),
(2, 1, "23th october 2025", "5th september 2025"),
(3, 1, "28th october 2025", "10th september 2025"),
(1, 2, "23th october 2025", "5th september 2025"),
(3, 2, "26th october 2025", "7th september 2025"),
(2, 2, "23th october 2025", "5th september 2025"),
(1, 3, "28th october 2025", "10th september 2025");

-- Query
SELECT * FROM Books WHERE category LIKE "Science";

SELECT b.book_id, b.member_id
FROM Borrow b
LEFT JOIN Books bs ON b.book_id = bs.book_id
LEFT JOIN Members m ON b.member_id = m.member_id
WHERE book_id IS NULL;
