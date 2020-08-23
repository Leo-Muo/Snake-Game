var bVal = false;

class Snake {
  constructor() {
    this.head = createVector(floor(w / 2), floor(h / 2));
    this.body = [];
    this.xdir = 0;
    this.ydir = 0;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  position() {
    if (this.head.x < 0) {
      this.head.x = w;
    } else if (this.head.y < 0) {
      this.head.y = h;
    } else if (this.head.x > w) {
      this.head.x = -1;
    } else if (this.head.y > h) {
      this.head.y = -1;
    }
  }

  endGame() {
    let x = this.head.x;
    let y = this.head.y;
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        return true;
      }
    }
    return false;
  }

  update() {
    this.body.shift();
    this.position();
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
      score++;
      bVal = true;
      return true;
    }
    bVal = false;
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
