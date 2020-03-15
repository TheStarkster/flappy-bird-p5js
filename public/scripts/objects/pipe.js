function Pipe() {
  var spacing = random(240, height / 4);
  var centery = random(spacing, height - spacing);

  this.top = centery - spacing / 2;
  this.bottom = height - (centery + spacing / 2);
  this.x = width;
  this.w = 50;
  this.speed = 8;

  this.hits = bird => {
    if (bird.y + 30 < this.top || bird.y + 30 > height - this.bottom) {
      if (bird.x + 30 > this.x && bird.x + 30 < this.x + this.w) {
        return true;
      }
    }
    return false;
  };
  this.show = () => {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = () => {
    this.x -= this.speed;
  };

  this.offscreen = () => {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}
