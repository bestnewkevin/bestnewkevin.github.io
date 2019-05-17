//variables
var canvas;
var r = 0;
var g = 0;
var b = 0;


//credit to Original by Daniel Shiffman.https://p5js.org/examples/math-noise-wave.html.. made it blue to make it even more boring


let yoff = 0.0; // 2nd dimension of perlin noise

//resize canvas if window is resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

//setup
function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,windowHeight/2.5); //finally figured out how to lower it
	canvas.style('z-index','-1');
}

//draw
function draw() {
//	noStroke();
	/*
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
//	fill(r, g, b);
//	ellipse(mouseX, mouseY, 5);
	strokeWeight(5);
	stroke(r, g, b);
    line(mouseX, mouseY, pmouseX, pmouseY);*/
    background(255);

    fill("#5bbdea");
    // We are going to draw a polygon out of the wave points
    beginShape();
  
    let xoff = 0; // Option #1: 2D Noise
    // let xoff = yoff; // Option #2: 1D Noise
  
    // Iterate over horizontal pixels
    for (let x = 0; x <= width; x += 10) {
      // Calculate a y value according to noise, map to
  
      // Option #1: 2D Noise
      let y = map(noise(xoff, yoff), 0, 1, 200, 300);
  
      // Option #2: 1D Noise
      // let y = map(noise(xoff), 0, 1, 200,300);
  
      // Set the vertex
      vertex(x, y);   

      // Increment x dimension for noise
      xoff += 0.05;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

function mousePressed() {
	//clear();
}