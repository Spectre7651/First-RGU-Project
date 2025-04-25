// Example colour object
// let carColour = {body: "darkblue",windows: "lightblue",tyres:"black"};

// Syntax for running this file in sketch.js
// carXOffset = animateCar(carXOffset,carColour);

// Declaration of vars for the car
// Starting position
let carXOffset = 10;
// Canvas Barrier Markers
let carXRightBarrier = false;
let carXLeftBarrier = true;
// Which way to draw the car
// true = left to right ; false = right to left
let carDirection = true;
let speed = 10;

// Car Colour Declarations
let HappyCarColours = [
    {body: "green",windows: "lightblue",tyres:"black"},
    {body: "yellow",windows: "lightblue",tyres:"black"}
];
let SadCarColours = [
    {body: "lightgrey" ,windows: "lightblue",tyres:"black"},
    {body: "grey" ,windows: "lightblue",tyres:"black"}
];


// Example carColour object
// let carColour = {body: "darkred",windows: "lightblue",tyres:"black"}

// Create and animate the car
function animateCar(carXOffset,carYOffset,carColour,carScale,speed){
    stroke("black")
    strokeWeight(2)
    // Scale the car
    function carScale (carScale) {
        let carScaled = ((carScale / 2.45) / 100);
        return carScaled;


    }

    // This creates the cars
    function drawCar(xOffset,yOffset,direction,carColour,speed){
        // Driving from left to right on screen
        function leftToRight(xOffset,yOffset,carColour){
            // Offset the car the correct amount
            translate(xOffset,yOffset)
            // Set the colour for the windows of the car
            fill(carColour.windows)
            // Cabin
            rect(35,20,90,40);
            // Back window
            triangle(10,50,35,20,35,50);
            // Front Window
            triangle(125,50,125,20,150,50);
            // Set the colour for the body and roof
            fill(carColour.body)
            // Main body of car
            rect(0,50,175,30,5);
            // Roof
            rect(35,18,90,2,1);
            fill("white")
            // Tyres
            fill(carColour.tyres);
            circle(35,80,25);
            circle(135,80,25);
            fill("white");
            // Reset co-ord positions
            translate(-xOffset,-yOffset)
        }
        // Driving from right to left of screen
        function rightToLeft(xOffset,yOffset,carColour){
            // Translate the position
            translate(xOffset,yOffset)
            // Get the fill colours from the object passed into function
            fill(carColour.windows)
            // Cabin
            rect(60,20,90,40);
            // Back window
            triangle(35,50,60,20,60,50);
            // Front Window
            triangle(150,50,150,20,170,50);
            fill(carColour.body)
            // Main body of car
            rect(0,50,175,30,5);
            // Roof
            rect(60,18,90,2,1);
            fill("white")
            // Tyres
            fill(carColour.tyres);
            circle(35,80,25);
            circle(135,80,25);
            fill("white");
            // Translate the function back again
            translate(-xOffset,-yOffset)
        }
 
    
        // This chooses which car gets drawn
        if (direction){
            // This draws the cars
            leftToRight(yOffset,xOffset,carColour)
        } else {
            rightToLeft(yOffset,xOffset,carColour)
        }
    }
    
    // This bounces the car left to right on the screen using the barrier method
    //  -200 is used so the car flips off screen and +100 for the same reason.
    if (carXOffset <= -500){
        carXLeftBarrier = true;
        carXRightBarrier = false;
        carDirection = true;
    }
    if (carXOffset >= canvasX+600){
        carXLeftBarrier = false;
        carXRightBarrier = true;
        carDirection = false;
    }
    // Increment/Decrement the offset marker
    if (carXLeftBarrier){
        carXOffset += speed
    }
    if (carXRightBarrier){
        carXOffset -= speed
    }
    // Actually draw the car
    if (carDirection){
        // This is setup for the road animation
        // Scale the car for the road
        push()
        scale(carScale(350));
        // Draw the car in the correct place
        drawCar(carYOffset-100,carXOffset,carDirection,carColour[0])
        pop()
    } else {
        push()
        scale(carScale(350));
        drawCar(carYOffset-50,carXOffset,carDirection,carColour[1])
        pop()
    }
    // Save var externally so it says for next loop
    return carXOffset
}


