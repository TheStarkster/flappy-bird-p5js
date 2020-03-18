function Bird() {
  console.log(height);
  this.y = height / 2;
  this.x = 85;
  this.gravity = 1;
  this.velocity = 0;
  this.thrust = -18;

  this.show = () => {
    fill(255);
    ellipse(this.x, this.y, 46, 46);
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
    this.velocity = 0;
    this.velocity += this.thrust;
    this.y += this.velocity;
  };
}
