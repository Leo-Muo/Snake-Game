let snake;
let rez = 20;
let w;
let h;
let food;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  w = floor(width / rez);
  h = floor(height / rez);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function draw() {
  scale(rez);
  background(220);

  snake.update();
  snake.show();
  if (snake.eat(food)) foodLocation();

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode == 32) {
    setup(); // restarts the game
  }
}
