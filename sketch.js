// Constants for the project that can be referenced anywhere
const canvasX = 1000;
const canvasY = 500;
let loopCounter = 0;
let alleycounter = 0;
let bincounter = 0;
let carXOffset2 = 1000;
let currentLeftArm = 0;

let happyFace = false;
let sadFace = true;
// Setup the page
function setup(){
    createCanvas(canvasX,canvasY)
    frameRate(20)
    
    

}

// Main Loop
// 100 loops = 5 seconds
function draw() {
    if (loopCounter < 15){ //This creates the amount of 'cans'
    trashCans = drawCans(trashCans)} //this draws then init
    background("white")
    loopCounter++
    
    if (loopCounter <= 200){
        strokeWeight(1)
        sadCity()
        moveCans(trashCans) // this moves said 'cans'
        carXOffset = animateCar(carXOffset,300,SadCarColours,200,30);
    } else if (loopCounter <= 400){
        strokeWeight(1)
        // Scene
        sadCity()
        moveCans(trashCans) // this moves said 'cans'
        // Create the car
        carXOffset = animateCar(carXOffset,300,SadCarColours,200,30);

        // Create the person

        characterMoving(80,195,0)


    } else if (loopCounter > 400 && loopCounter <= 550){
        // Sets y offset for the alley scene
        alleycounter++;
        // Scene
        alleyWay();
        // Add the bin into the end of the scene
        drawBin(600,350,200);
        // Move the character down to the correct position
        if (alleycounter < 50){
            translate(-30,0);
            characterMoving(105+(3*alleycounter),80+alleycounter,0);
            // console.log(currentLeftArm)
            // rect(105+(3*alleycounter)-currentLeftArm,250+alleycounter*3,30,10)
        // Otherwise show the character standing
        } else {
            characterStill(105+(3* 50),470,130);
        }

    } else if (loopCounter > 550 && loopCounter <= 650){
        // Scene
        bincounter += 5;
        binCloseup();
        // This drops the bottle into the bin
        if (bincounter < 300){
            // dropRubbishInBin(300+bincounter, 100+bincounter);
            drawBottle(bincounter,bincounter-200)
            strokeWeight(0);
            fill(34, 139, 34); // Green color
            rect(250,400, 400, 150);
            fill(0, 100, 0);
            rect(300, 375, 300, 25);
        
        } else if (bincounter => 300 && bincounter < 400){
            drawBottle(300,bincounter-200);
        }
        
        // Cover the green panel of the bin for better effect
        strokeWeight(0);
        fill(34, 139, 34); // Green color
        rect(250,400, 400, 150);
        fill(0, 100, 0);
        rect(300, 375, 300, 25);
    // The interval scene explaining whats happening
    } else if (loopCounter > 650 && loopCounter <= 1050){
        background("darkgreen")
        stroke("White");
        fill(47, 174, 15);
        textSize(28);
        textAlign(CENTER);
        text("After the discovery of the mysterious recycling bin…" , 500, 50);
        text("The civilians realized they were not doing enough for their environment,", 500, 100);
        text("and gloomy city.", 500, 150);
        text("So they decided to change that.", 500, 200);
        text("After a long few years, the city finally adapted,", 500, 250);
        text("Creating a more fun and colorful environment for the civilians to look", 500, 300);
        text("forward to!", 500, 350);
        text("From clearing up litter to becoming one with nature.", 500, 400);
        text("The city becomes unrecognizable to what it once was.", 500, 450);
    // Show the nice city
    } else if (loopCounter > 1050 && loopCounter <= 1250){
        goodCity();
        carXOffset = animateCar(carXOffset,300,HappyCarColours,200,15);
        bike(100,0,270);
        happyFace = true;
        sadFace = false;
    // Show the park scene
    } else if (loopCounter > 1250 && loopCounter <= 1550){
        park();
        carXOffset = animateCar(carXOffset,300,HappyCarColours,200,15);
        happyFace = true;
        sadFace = false;
        characterMoving(80,195,0)
        characterMoving2(80,195,-2)
    } else {
        end()
    }




}


