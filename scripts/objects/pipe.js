function Pipe() {
  this.top = random(height / 2);
  this.bottom = random(height / 2);
  this.x = width;
  this.w = 50;
  this.speed = 5;

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
