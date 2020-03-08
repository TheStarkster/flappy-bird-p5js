function Bird() {
  this.y = height / 2;
  this.x = 85;
  this.gravity = 1.3;
  this.velocity = 0;
  this.thrust = -21;

  this.show = () => {
    fill(255);
    ellipse(this.x, this.y, 64, 64);
  };

  this.update = () => {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };

  this.up = () => {
    this.velocity += this.thrust;
    this.y += this.velocity;
  };
}
