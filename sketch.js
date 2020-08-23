let snake;
let ob;
let rez = 20;
let w;
let h;
let food;
let r;
let g;
let b;
let count;

function setup() {
  createCanvas(300, 300);
  frameRate(5);
  w = floor(width / rez);
  h = floor(height / rez);
  snake = new Snake();
  r = random(0, 255);
  b = random(0, 255);
  g = random(0, 255);
  score = 0;
  foodLocation();
  ob = new Obstacle();
  obstacle.push(new Obstacle());
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function draw() {
  scale(rez);
  background(220);

  ////////////////////////////////Eat
  if (snake.eat(food)) {
    foodLocation();
    r = floor(random(0, 255));
    b = floor(random(0, 255));
    g = floor(random(0, 255));
    if (score % 2 === 0 && bVal === true) {
      ob.position();
      console.log("ran");
      obstacle.push(new Obstacle());
    }
  }

  ////////////////////////////////////////// Obstacle
  if (score > 0) {
    handleObstacle();
  }

  ////////////////////// Score Display
  textSize(1.5);
  fill("purple");
  text(score, 0.2, 1.5);

  snake.update(); //////////////// Update Snake

  ///////////////////// Food Draw
  noStroke();
  fill(r, 255, g);
  rect(food.x, food.y, 1, 1);

  snake.show(); //////////// show snake

  //////////////////////////////// End Game
  if (end == true) {
    endGmaeZero();
  }
  endGameEat();
}
//////////////////////////////// End Game
function endGameEat() {
  if (snake.endGame()) {
    background(255, 0, 0);
    textSize(1.5);
    fill(0);
    text("You Ate Yourself", 2, h / 2);
    text("Score: " + score, 5, h / 2 + 2.5);
    noLoop();
  }
}

function endGmaeZero() {
  background(255, 0, 0);
  textSize(1.5);
  fill(0);
  text("You Lose", 2, h / 2);
  text("Score: " + score, 2, h / 2 + 2);
  noLoop();
}

////////////////////////////////// Key Pressed
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
