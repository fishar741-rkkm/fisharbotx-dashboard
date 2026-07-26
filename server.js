const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('./fisharbotx.db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// تسجيل مستخدم جديد
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    function(err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ id: this.lastID, name, email });
    }
  );
});

// تسجيل دخول
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, row) => {
      if (err) return res.status(400).json({ error: err.message });
      if (!row) return res.status(401).json({ error: 'Invalid credentials' });
      res.json({ message: 'Login successful', user: row });
    }
  );
});

app.listen(4000, () => console.log('FisharBotX server running on http://localhost:4000'));
