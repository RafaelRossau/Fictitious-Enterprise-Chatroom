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

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000/login.html"),
  console.log("Server running on http://localhost:3000/register.html"),
  console.log("Server running on http://localhost:3000/main.html")
)
