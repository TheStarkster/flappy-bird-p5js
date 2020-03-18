var bird;
var pipes = [];
var score = 0;
function setup() {
  createCanvas(width, height);
  bird = new Bird();
  pipes.push(new Pipe());
  // var canvas = document.getElementById("defaultCanvas0");
  // console.log(canvas);
  // var displayWidth = canvas.clientWidth * window.devicePixelRatio;
  // var displayHeight = canvas.clientHeight * window.devicePixelRatio;
  // if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
  //   canvas.width = displayWidth;
  //   canvas.height = displayHeight;
  // }
}

function draw() {
  background(0);
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      fill(255, 191, 0);
      textSize(98);
      textStyle(BOLDITALIC);
      text("Game Over", window.innerWidth / 4, window.innerHeight / 3.8);

      fill(255, 180, 0);
      textSize(72);
      textStyle(BOLD);
      text("Score", window.innerWidth / 2.5, window.innerHeight / 2.2);

      textStyle(NORMAL);
      text(score.toString(), window.innerWidth / 2.1, window.innerHeight / 2);
      noLoop();

      // sending score to server...
      var xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
        if (xhttp.readyState === xhttp.DONE) {
          if (xhttp.status === 200) {
            window.location.replace(
              "http://games.ibigplay.com/flappy/response"
            );
          }
        }
      };
      xhttp.open("POST", "http://games.ibigplay.com/flappy/score", true);
      // xhttp.setRequestHeader(
      //   "Content-Type",
      //   "application/x-www-form-urlencoded"
      // );
      // xhttp.send("foo=bar&lorem=ipsum");
      xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhttp.send(JSON.stringify({ score: score }));
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
      score += 1;
    }
  }
  bird.update();
  bird.show();
}

// function preload() {
//   fontAtari = loadFont("./assets/fonts/AtariClassicChunky.ttf");
// }

function mousePressed() {
  bird.up();
  // if (key == " ") {
  //   bird.up();
  // }
}
