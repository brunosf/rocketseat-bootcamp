const express = require("express");

const server = express();

server.use(express.json());

let numberRequest = 0;
var projects = [];

function checkProjectId(req, res, next) {
  const { id } = req.params;

  const project = projects.find(el => el.id === id);

  if (!project) {
    return res.status(400).json({ "message": "ID not found" })
  }

  return next();
}

function logRequests(req, res, next) {
  numberRequest++;
  console.log(`Requisição realizada pela ${numberRequest} vez.`);

   return next();
}

server.use(logRequests);

server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    tasks: []
  }

  projects.push(project);

  res.json(projects);
});

server.get("/projects", (req, res) => {
  res.json(projects);
});

server.put("/projects/:id", checkProjectId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(el => el.id === id);

  project.title = title;
  
  return res.json(project)
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(el => el.id === id);

  projects.splice(projectIndex, 1);

  res.send();
});

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);
