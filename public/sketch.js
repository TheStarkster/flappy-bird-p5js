var bird;
var pipes = [];
var score = 0;
function setup() {
  createCanvas(window.outerWidth, window.outerHeight);
  bird = new Bird();
  pipes.push(new Pipe());

  var canvas = document.getElementById("defaultCanvas0");
  context = canvas.getContext("2d");
  canvas.width = window.outerWidth * devicePixelRatio;
  canvas.height = window.outerHeight * devicePixelRatio;
}

function draw() {
  background(0);
  if (frameCount % 80 == 0) {
    pipes.push(new Pipe());
  }
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    // if (pipes[i].hits(bird)) {
    //   fill(255, 191, 0);
    //   textSize(98);
    //   textStyle(BOLDITALIC);
    //   noLoop();
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onload = function() {
    //     if (xhttp.readyState === xhttp.DONE) {
    //       if (xhttp.status === 200) {
    //         window.location.replace(
    //           "http://games.ibigplay.com/flappy/response"
    //         );
    //       }
    //     }
    //   };
    //   xhttp.open("POST", "http://games.ibigplay.com/flappy/score", true);
    //   // xhttp.setRequestHeader(
    //   //   "Content-Type",
    //   //   "application/x-www-form-urlencoded"
    //   // );
    //   // xhttp.send("foo=bar&lorem=ipsum");
    //   xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //   xhttp.send(JSON.stringify({ score: score }));
    // }

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
