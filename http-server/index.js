const express = require("express");
const path = require("path");

const app = express();


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "project.html"));
});

app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "registration.html"));
});


let portArg = process.argv.find(arg => arg.startsWith("--port="));
let port = portArg ? parseInt(portArg.split("=")[1]) : 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
