function drawBin(xOffset,yOffset,binScalePx){
  function binScale (binScalePx) {
    let binScaled = ((binScalePx / 2.45) / 100);
    return binScaled;
  }
  // console.log(binScale(binScalePx))
  scale(binScale(binScalePx))
  // translate(xOffset,yOffset)
  // Recycling bin body
  fill(34, 139, 34); // Green color
  rect(150+xOffset, 150+yOffset, 100, 150); // x, y, width, height

  // Recycling bin lid
  fill(0, 100, 0); // Darker green color
  rect(135+xOffset, 130+yOffset, 130, 20); // h (x, y, width, height)

  // Recycling bin handles
  fill(0, 80, 0); // Dark green for handles
  rect(135+xOffset, 165+yOffset, 20, 10); // Left handle
  rect(245+xOffset, 165+yOffset, 20, 10); // Right handle
  
  // translate(-xOffset,-yOffset)
  scale(1)
}

function dropRubbishInBin(xPosition,yPosition){
  // Code here for rubbish
  circle(xPosition,yPosition,100)
}


function drawBottle(xOffset,yOffset) {
      noFill()
      strokeWeight(4)
      stroke(0)
      rect(150+xOffset, 200+yOffset, 100, 190); // x, y, width, height
  
      fill(169, 169, 169); 
      rect(180+xOffset, 140+yOffset, 40, 20); //Bottle cap
      
      stroke(0); 
      line(150+xOffset, 300+yOffset, 250+xOffset, 300+yOffset); // Bottom body
      line(180+xOffset, 140+yOffset, 180+xOffset, 160+yOffset); // Left neck
      line(220+xOffset, 140+yOffset, 220+xOffset, 160+yOffset); // Right neck
      line(150+xOffset, 200+yOffset, 180+xOffset, 160+yOffset); // Left slanted side
      line(250+xOffset, 200+yOffset, 220+xOffset, 160+yOffset); // Right slanted side
      line(180+xOffset, 160+yOffset, 220+xOffset, 160+yOffset); // Top slant
      fill("white")
}



//   // Recycling symbol (white)
//   //drawRecyclingSymbol(200, 220, 40); // Draw recycling symbol in center
// // Function to draw a simple recycling symbol in the middle
// //function drawRecyclingSymbol(x, y, size) {
//   //fill(255); // White color for recycling symbol
//   //stroke(255); // White stroke for the lines
//   // Draw three arrows forming a triangle for the recycling symbol





let trashCans = [];
let trashColours = ["black", "grey", "green", "red", "white"];
const canDiameter = 15; // Fixed diameter for all cans

class TrashCan {
  constructor(x, y, diameter, speedX, trashColours) {
    this.x = x; // Current x position
    this.y = y; // Current y position
    this.diameter = diameter; // Fixed diameter to keep the cans the same size
    this.speedX = speedX; // Only horizontal speed
    this.rotationAngle = 0; // Rotation angle
    this.colour = trashColours
  } move() {

    // Update horizontal position
    this.x += this.speedX;
    
    // Rotate the cans
    this.rotationAngle += 0.05; // Adjust the speed of rotation

    // Bounce off left and right walls
    if (this.x > width - this.diameter / 2 || this.x < this.diameter / 2) {
      this.speedX *= -1; // Reverse direction when hitting the edge
    }
  } display() {
    fill(this.colour);
    noStroke();
    
    // Save the current drawing state
    push();
    translate(this.x, this.y + this.diameter / 2); 
    rotate(this.rotationAngle); // Rotate by the angle
   
    // Draw the cans
    rect(-this.diameter / 2, 0, this.diameter, this.diameter); // Body of the cans
    ellipse(0, this.diameter, this.diameter, this.diameter / 2); // Bottom of the cans
    pop();
  }}


  

function drawCans(trashCans) {

  // Creating the cans
    // Create cans
    for (let i = 0; i < 5; i++) {
      let initialX = random(0, 1200);
      let initialY = random(290, 320); // This will limit y to the bottom half of the canvas to make it look like it's staying on the road.
      
      let horizontalSpeed = random(1, 4) * (random() > 0.5 ? 1 : -1); // Random horizontal speed
    
    
    trashCans.push(new TrashCan(initialX, initialY, canDiameter, horizontalSpeed,trashColours[Math.floor(Math.random()*4)]));
   return trashCans
  }
  return trashCans
}
//   //background(200, 220, 255);
function moveCans(trashCans){
  //     / Update and display each can
     for (let can of trashCans) {
       can.move();
       can.display();
     }
}



  
  



//     // Update and display each can
//     for (let can of trashCans) {
//       can.move();
//       can.display();
//     }

// }
