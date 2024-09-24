function star(x, y, w, c) {
  let r = w / 2;
  push();
  translate(x, y);
  line(-c, -c, 0, -r);
  line(0, -r, c, -c);

  line(-c, c, 0, r);
  line(0, r, c, c);

  line(c, -c, r, 0);
  line(r, 0, c, c);

  line(-c, -c, -r, 0);
  line(-r, 0, -c, c);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 120, 120);

  strokeWeight(2);

  push();

  noFill();
  translate(500, height / 2);
  for (let d = 20; d < 1000; d += 20){
    ellipse(0, 0, d);
  }

  translate(-30, 0);
  for (let d = 20; d < 1000; d += 20){
    ellipse(0, 0, d);
  }

  pop();
}

function draw() {}
