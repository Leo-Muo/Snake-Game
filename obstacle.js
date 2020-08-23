const obstacle = [];
let end = false;

class Obstacle {
  constructor() {
    this.x = Math.floor(Math.random() * w);
    this.y = Math.floor(Math.random() * h);
  }

  update() {
    this.show();
  }

  position() {
    this.x = Math.floor(Math.random() * w);
    this.y = Math.floor(Math.random() * h);
  }

  duplicate() {
    let x = snake.head.x;
    let y = snake.head.y;

    if (x == this.x && y == this.y) {
      snake.body.shift();
      score--;
      if (score == 0) {
        end = true;
      }
    }
  }

  show() {
    strokeWeight(0.1);
    stroke("red");
    noFill();
    rect(this.x, this.y, 1, 1);
  }
}

function handleObstacle() {
  for (let i = 0; i < obstacle.length; i++) {
    obstacle[i].duplicate();
    obstacle[i].update();
  }

  if (obstacle.length === 30) {
    obstacle.pop(obstacle[0]);
  }
}
