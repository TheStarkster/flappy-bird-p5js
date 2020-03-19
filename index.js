const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const engine = require("ejs-locals");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

var score, Bscore, id, name;
app.engine("ejs", engine);
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.json());

app.get("/:id/:name", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.name);
  fs.readFile("index.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
    id = req.params.id;
    name = req.params.name;
  });
});

app.get("/response", (req, res) => {
  return res.render("results", {
    score: score,
    Bscore: Bscore,
    name: name
  });
});

app.post("/score", (req, res) => {
  score = req.body.score;
  Bscore = req.body.Bscore;
  res.sendStatus(200);
});
app.listen(2572);
