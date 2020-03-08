var bird;
var pipes = [];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  bird = new Bird();
  pipes.push(new Pipe());
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
      console.log("HITS");
    }

    if (pipes[i].offscreen()) { 
      pipes.splice(i, 1);
    }
  }
  bird.update();
  bird.show();
}

function mousePressed() {
  bird.up();
  // if (key == " ") {
  //   bird.up();
  // }
}
