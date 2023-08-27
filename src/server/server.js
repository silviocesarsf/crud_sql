const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/get", (req, res) => {
  let SQL = "SELECT * FROM crud";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post("/post", (req, res) => {
  const { nome } = req.body;
  const { telefone } = req.body;
  const { endereco } = req.body;
  const { email } = req.body;
  const { senha } = req.body;

  let SQL =
    "INSERT INTO crud (nome, telefone, endereco, email, senha ) VALUES ( ?, ?, ?, ?, ?)";

  db.query(SQL, [nome, telefone, endereco, email, senha], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => console.log("Servidor rodando..."));
