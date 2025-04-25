// Person

let walkingX = 0;

//sets the inital x position of the legs
let leftLegX = 170;
let rightLegX = 110;

//creates two poitions of the legs
let leftLegDirection = 1;
let rightLegDirection = 2;



//sets the inital x position of the arms
let leftArmX = 170;
let rightArmX = 110;

//creates two positions of the legs
let leftArmDirection = 1;
let rightArmDirection = 2;



//vairaibles for if the person has hit the left or the right hand side
let personleftHit = true;
let personrightHit = false;

let personXOffset = 0;
let personYOffset = 0;




//function for the character when they are stationary
function characterStill (personScale,personXOffset,personYOffset) {
    translate(personXOffset,personYOffset)
    strokeWeight(3)
    //allows the person to be scaled up or down

    function characterScale (personScale) {
        let charScale = ((personScale / 2.45) / 100);
        return charScale;


    }

    //creates the person when stationary
    function personStill () {

        strokeWeight(3)
        stroke("black")
        fill(245, 204, 152); //fill for the head
        line (140, 185, 140, 280); // body 
        strokeWeight(1)
        circle (140, 155, 60); // head

        //code whether the character should be smiling or frowning
        if (happyFace == true) { 
            arc (140, 165, 20, 20, 0, 60); //smile
        } else {
        arc (140, 175, 20, 20, 60, 270); //frown
        }


        fill("black");//fill for tophat
        rect(120, 105, 40, 22, 4);//rim of tophat
        rect(110, 125, 60, 10, 2);//top of tophat
        fill ("black"); //fill for the eyes
        circle(130, 155, 5); //right eye
        circle(150, 155, 5); // left eye
        line (147, 145, 155, 147); // right eyebrow
        line (125, 147, 132, 145); //left eyebrow
        strokeWeight(3)
        stroke ("red");
        line (140, 210, leftArmX, 310); // left arm
        stroke ("green");
        line (140, 210, rightArmX, 310); //right arm
        stroke ("black");
        line (140, 280, leftLegX, 400, 10); // left leg
        line (leftLegX, 400, (leftLegX + 15), 400);// left foot
        line (140, 280, rightLegX, 400, 10); // right leg
        line (rightLegX, 400, (rightLegX + 15), 400); //right foot

    }

        //calls of the funcitons within the characterStill funciton
        scale(characterScale(personScale));
        personStill ();
        strokeWeight(1)
}



//fucntion for the character moving
function characterMoving (personScale,yOffset,speedFactor) {
    translate(0,yOffset)
    strokeWeight(10)



    //fucntion to allow the character to be scaled up or down
    function characterScale (personScale) {
        let charScale = ((personScale / 2.45) / 100);
        return charScale;


    }

    //fucntion to create the main body of the character exluding the limbs
    function character () {
        strokeWeight(3)
        stroke("black")
        fill(245, 204, 152); //fill for the head
        line (140, 185, 140, 280); // body 
        strokeWeight(1)
        circle (140, 155, 60); // head
           
        if (happyFace == true) { 
            arc (140, 165, 20, 20, 0, 60); //smile
        } else {
        arc (140, 175, 20, 20, 60, 270); //frown
        }

        fill("black");//fill for tophat
        rect(120, 105, 40, 22, 4);//rim of tophat
        rect(110, 125, 60, 10, 2);//top of tophat

        fill ("black"); //fill for the eyes
        circle(130, 155, 5); //right eye
        circle(150, 155, 5); // left eye
        line (147, 145, 155, 147); // right eyebrow
        line (125, 147, 132, 145); //left eyebrow
        strokeWeight(3)


    }

    //creates the left arm
    function leftArm () {
        stroke ("red"); //Sort out colours for 3d effect
        line (140, 210, leftArmX, 310); // left arm
    }

    //creates the right arm
    function rightArm () {
        stroke ("green");
        line (140, 210, rightArmX, 310); //right arm
    }

    //function identifies where the arms are and if they are at each position
    function armsMoving () {
        if (leftArmX <= 110) {
            leftArmDirection = 1;};
        if (leftArmX >= 170) {
            leftArmDirection = 2;};

        
        if (rightArmX <= 110) {
            rightArmDirection = 1;};
        if (rightArmX >= 170) {
            rightArmDirection = 2;};

        //can use this switch to increase the speed of the arms moving, when they appear at each position
        switch (leftArmDirection) {
            case 1:
                leftArmX += 2;
                break;
            case 2:
                leftArmX -= 2;
                break;
            default:
                console.log("Switch failed")
                break;  
        }


        switch (rightArmDirection) {
            case 1:
                rightArmX += 2;
                break;
            case 2:
                rightArmX -= 2;
                break;
            default:
                console.log("Switch failed")
                break;
        }
        return leftArmX

        
  
    }

    function leftLeg () {
        stroke ("black");
        line (140, 280, leftLegX, 400, 10); // left leg

        if (personrightHit) {
            line (leftLegX, 400, (leftLegX - 15), 400);// left foot walking right to left
        } else {
            line (leftLegX, 400, (leftLegX + 15), 400);// left foot walking left to right
            }
    }

    function rightLeg () {
        stroke ("black");
        line (140, 280, rightLegX, 400, 10); // right leg

        if (personrightHit) {
            line (rightLegX, 400, (rightLegX - 15), 400); //right foot walking right to left          
        } else {
        line (rightLegX, 400, (rightLegX + 15), 400); //right foot walking left to right
        }
    }


    
    //function identifies where the legs are and if they are at each position
    function legsMoving () {
        if (leftLegX <= 110) {
            leftLegDirection = 1;};
        if (leftLegX >= 170) {
            leftLegDirection = 2;};

        
        if (rightLegX <= 110) {
            rightLegDirection = 1;};
        if (rightLegX >= 170) {
            rightLegDirection = 2;};

        switch (leftLegDirection) {
            case 1:
                leftLegX += 2;
                break;
            case 2:
                leftLegX -= 2;
                break;
            default:
                console.log("Switch failed")
                break;  
        }

        //can use this switch to increase the speed of the legs moving, when they appear at each position
        switch (rightLegDirection) {
            case 1:
                rightLegX += 2;
                break;
            case 2:
                rightLegX -= 2;
                break;
            default:
                console.log("Switch failed")
                break;
        }

        

    }

    //identifies when the person has hit the left or right of the canvas
    if (walkingX >= canvasX-300) {
        personleftHit = false;
        personrightHit = true;
    
    } else if (walkingX <= -100){
        personleftHit = true;
        personrightHit = false;
    }

    //allows the person to move either left to right or vise versa
    if (personleftHit) {
        walkingX +=(2-speedFactor);     
    } else if (personrightHit) {
        walkingX -=(2-speedFactor);  
    }
  
        translate (walkingX, 0);

        //calls the functions within the characterMoving function
        push()
        scale(characterScale(personScale));
        character();
        leftLeg ();
        rightLeg ();
        leftArm ();
        rightArm ();
        legsMoving ();
        armsMoving ();
 

        translate (-walkingX, 0);




        strokeWeight(1)
        pop()
        translate(0,-yOffset)
        return leftArmX
        }






        //fucntion for the character moving
function characterMoving2 (personScale,yOffset) {
    translate(0,yOffset)
    strokeWeight(10)



    //fucntion to allow the character to be scaled up or down
    function characterScale (personScale) {
        let charScale = ((personScale / 2.45) / 100);
        return charScale;


    }

    //fucntion to create the main body of the character exluding the limbs
    function character () {
        strokeWeight(3)
        stroke("black")
        fill(245, 204, 152); //fill for the head
        line (140, 185, 140, 280); // body 
        strokeWeight(1)
        circle (140, 155, 60); // head
           
        if (happyFace == true) { 
            arc (140, 165, 20, 20, 0, 60); //smile
        } else {
        arc (140, 175, 20, 20, 60, 270); //frown
        }

        fill("black");//fill for tophat
        rect(120, 105, 40, 22, 4);//rim of tophat
        rect(110, 125, 60, 10, 2);//top of tophat

        fill ("black"); //fill for the eyes
        circle(130, 155, 5); //right eye
        circle(150, 155, 5); // left eye
        line (147, 145, 155, 147); // right eyebrow
        line (125, 147, 132, 145); //left eyebrow
        strokeWeight(3)


    }

    //creates the left arm
    function leftArm () {
        stroke ("red"); //Sort out colours for 3d effect
        line (140, 210, leftArmX, 310); // left arm
    }

    //creates the right arm
    function rightArm () {
        stroke ("green");
        line (140, 210, rightArmX, 310); //right arm
    }

    //function identifies where the arms are and if they are at each position
    function armsMoving () {
        if (leftArmX <= 110) {
            leftArmDirection = 1;};
        if (leftArmX >= 170) {
            leftArmDirection = 2;};

        
        if (rightArmX <= 110) {
            rightArmDirection = 1;};
        if (rightArmX >= 170) {
            rightArmDirection = 2;};

        //can use this switch to increase the speed of the arms moving, when they appear at each position
        switch (leftArmDirection) {
            case 1:
                leftArmX += 2;
                break;
            case 2:
                leftArmX -= 2;
                break;
            default:
                console.log("Switch failed")
                break;  
        }
        return leftArmX

        switch (rightArmDirection) {
            case 1:
                rightArmX += 2;
                break;
            case 2:
                rightArmX -= 2;
                break;
            default:
                console.log("Switch failed")
                break;
        }

        
  
    }

    function leftLeg () {
        stroke ("black");
        line (140, 280, leftLegX, 400, 10); // left leg

        if (personrightHit) {
            line (leftLegX, 400, (leftLegX - 15), 400);// left foot walking right to left
        } else {
            line (leftLegX, 400, (leftLegX + 15), 400);// left foot walking left to right
            }
    }

    function rightLeg () {
        stroke ("black");
        line (140, 280, rightLegX, 400, 10); // right leg

        if (personrightHit) {
            line (rightLegX, 400, (rightLegX - 15), 400); //right foot walking right to left          
        } else {
        line (rightLegX, 400, (rightLegX + 15), 400); //right foot walking left to right
        }
    }


    
    //function identifies where the legs are and if they are at each position
    function legsMoving () {
        if (leftLegX <= 110) {
            leftLegDirection = 1;};
        if (leftLegX >= 170) {
            leftLegDirection = 2;};

        
        if (rightLegX <= 110) {
            rightLegDirection = 1;};
        if (rightLegX >= 170) {
            rightLegDirection = 2;};

        switch (leftLegDirection) {
            case 1:
                leftLegX += 2;
                break;
            case 2:
                leftLegX -= 2;
                break;
            default:
                console.log("Switch failed")
                break;  
        }

        //can use this switch to increase the speed of the legs moving, when they appear at each position
        switch (rightLegDirection) {
            case 1:
                rightLegX += 2;
                break;
            case 2:
                rightLegX -= 2;
                break;
            default:
                console.log("Switch failed")
                break;
        }

        

    }

    //identifies when the person has hit the left or right of the canvas
    if (walkingX >= canvasX-300) {
        personleftHit = false;
        personrightHit = true;
    
    } else if (walkingX <= -100){
        personleftHit = true;
        personrightHit = false;
    }

    //allows the person to move either left to right or vise versa
    if (personleftHit) {
        walkingX +=2;     
    } else if (personrightHit) {
        walkingX -=2;  
    }
  
        translate (walkingX, 0);

        //calls the functions within the characterMoving function
        push()
        scale(characterScale(personScale));
        character();
        leftLeg ();
        rightLeg ();
        leftArm ();
        rightArm ();
        legsMoving ();
        armsMoving ();
 

        translate (-walkingX, 0);




        strokeWeight(1)
        pop()
        translate(0,-yOffset)
        return leftArmX
        }

        

        


    





