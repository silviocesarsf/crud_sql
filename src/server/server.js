const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/get", (req, res) => {
   res.send("Hello world")
})

app.listen(3001, () => console.log("Servidor rodando..."));
