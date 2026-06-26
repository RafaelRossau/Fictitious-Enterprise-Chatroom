const express = require('express')
const mysql = require('mysql2')
const path = require("path")

const app = express()

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "Fictitious_Enterprise_Chatroom",
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.get("/adm", (req, res) => {
  db.query("SELECT * FROM adm", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.get("/logged_in", (req, res) => {
  db.query("SELECT * FROM logged_in", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.get("/messages", (req, res) => {
  db.query("SELECT * FROM messages", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.post("/employees", (req, res) => {
  const {email, name, password} = req.body;
  db.query(
    "INSERT INTO employees (employee_email, employee_name, employee_password) VALUES (?, ?, ?)",
    [email, name, password], 
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Employee register was a success." });
    }
  );
});

app.post("/logged_in", (req, res) => {
  const {id2, email} = req.body;
  db.query(
    "INSERT INTO logged_in (id, employee_email) VALUES (?, ?)",
    [id2, email], 
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Login was a success!" });
    }
  );
});
app.post("/messages", (req, res) => {
  const {sender_name, sender_email, message} = req.body;
  db.query(
    "INSERT INTO messages (sender_name, sender_email, message) VALUES (?, ?, ?)",
    [sender_name, sender_email, message], 
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Message creation was a success!" });
    }
  );
});


app.delete("/logged_in/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM logged_in WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Deleted!" });
  });
});
app.listen(3000, () =>
  console.log("Server running on http://localhost:3000/login.html"),
  console.log("Server running on http://localhost:3000/register.html"),
  console.log("Server running on http://localhost:3000/main.html")
)
