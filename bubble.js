var bubbles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 20; i++) { // change number
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(50, 20) // change size
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(90, 299, 288, 100); // change colour
    } else {
      fill(70, 50, 200, 200);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-2, 2); // change how fast bubble move
    bubble.y += random(-3, 3);
  }
}
