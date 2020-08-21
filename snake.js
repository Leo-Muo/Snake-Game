class Snake {
  constructor() {
    this.body = [];
    this.head = createVector(floor(w / 2), floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    this.body.shift();
    this.head.x += this.xdir;
    this.head.y += this.ydir;
    this.body.push(this.head.copy());
  }

  grow() {
    this.body.push(this.head.copy());
  }

  eat(pos) {
    let x = this.head.x;
    let y = this.head.y;

    if (x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }

    return false;
  }

  show() {
    noStroke();

    for (let i = 0; i < this.body.length; i++) {
      fill(0, 26, 0);
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }

    fill(51, 102, 0);
    rect(this.head.x, this.head.y, 1, 1);
  }
}
