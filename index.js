const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const engine = require("ejs-locals");
const expressLayouts = require("express-ejs-layouts");
const axios = require("axios");
const app = express();

var score, Bscore, id, name, tid;
app.engine("ejs", engine);
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.json());

app.get("/:tid/:id/:name", (req, res) => {
  fs.readFile("index.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
    id = req.params.id;
    name = req.params.name;
    tid = req.params.tid;
  });
});

app.get("/response", (req, res) => {
  res.render("results", {
    score: score,
    Bscore: Bscore,
    name: name
  });
  const data = {
    score: score,
    id: id,
    tid: tid
  };
  axios.default
    .post("http://localhost:5000/tournament/user/score-update", data)
    .then(u => console.log(u));
});

app.post("/score", (req, res) => {
  score = req.body.score;
  Bscore = req.body.Bscore;
  res.sendStatus(200);
});
app.listen(2572);
