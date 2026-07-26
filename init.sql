CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

INSERT INTO users (name, email, password) VALUES
('Mohamed Fisher', 'mohamed@example.com', '123456');
