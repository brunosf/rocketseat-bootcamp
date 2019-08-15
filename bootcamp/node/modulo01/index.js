const express = require("express");

const server = express();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true
  })
);

// server.get("/", (req, res) => {
//   return res.send("Hello World");
// });

const users = ["Bruno", "Carol", "Maria", "José"];

server.get("/", (req, res) => {
  return res.send(`
  <h1>Node + Express</h1>

  <p>Query params: <i>/users?name=Bruno</i></p>
  <a href="/users?name=Bruno">Acessar</a>
  <br>
  <p>Route params: <i>/users/1</i></p>
  <a href="/users/1">Acessar</a>
  <br>
  <p>Body params (POST):</p>
  <b>${users}</b>

  <form action="/users" method="post" enctype="application/x-www-form-urlencoded">
    <input type="text" name="name">
    <button>inserir</button>
  </form>
  `);
});

server.get("/users", (req, res) => {
  const { name } = req.query;

  return res.send(`
    <h1>Node + Express</h1>

    <p>Parâmetro passado:</p>
    <code>name: ${name}</code>
    <br>
    <a href="/">Voltar</a>
    `);
});

server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  return res.send(`
    <h1>Node + Express</h1>

    <p>Parâmetro passado:</p>
    <code>id: ${id} - Usuário: ${users[id]}</code>
    <br>
    <a href="/">Voltar</a>
    `);
});

server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.send(`
        <h1>Node + Express</h1>

        <p>Usuário adicionado!</p>
        <code>usuários: ${users}</code>
        <br>
        <a href="/">Voltar</a>
        `);
});

server.listen(3000);
