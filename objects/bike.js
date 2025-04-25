

let cyclingX = 0;
let bikeLeftHit = true;
let bikeRightHit = false;

function bike (cycleScale,x,y){
    function bikeScale(cycleScale){
        let bycicleScale = ((cycleScale / 2) / 100);
        return bycicleScale;
    }
    function bikeLeft(cycleScale,x,y){
        translate(x,y);
        // person
        strokeWeight(3);
        fill (255,215,180);
        ellipse(170,10,30,30);
        line(170,25,165,55);
        line(169,30,125,50);
        line(165,55,155,100);

        // bike
        fill ("black");
        ellipse(100,100,40,40);
        ellipse(200,100,40,40);
        fill("white");
        circle (100,100,35);
        circle(200,100,35);
        
        stroke("blue");
        line(100,100,125,65);
        line(200,100,175,65);
        line(125,65,175,65);
        line(200,100,160,100);
        line(160,100,125,65);
        line(160,100,175,65);
        line(175,65,170,55);
        line(125,65,120,50);
        line(120,50,130,50);
        strokeWeight(5);
        stroke("black");
        line(170,55,160,55);
        translate(-x,-y);
 
    }

    function bikeRight(cycleScale,x,y){
        translate(x,y);
        // person
        strokeWeight(3);
        fill (255,215,180);
        ellipse(120,10,30,30);
        line(120,25,125,55);
        line(123,30,175,50);
        line(125,55,150,100);
       
        // bike
        fill ("black");
        ellipse(100,100,40,40);
        ellipse(200,100,40,40);
        fill("white");
        circle(100,100,35);
        circle(200,100,35);

        stroke("yellow");
        line(100,100,125,65);
        line(200,100,175,65);
        line(125,65,175,65);
        line(100,100,140,100);
        line(140,100,125,65);
        line(140,100,175,65);
        line(175,65,180,50);
        line(180,50,170,50);
        line(125,65,120,55);
        strokeWeight(5);
        stroke("black");
        line(120,55,130,55);
        
        translate(-x,-y);
        
    }
    function movingBike () {

    if(cyclingX >= 900){
        bikeLeftHit = false;
        bikeRightHit = true;
        
    }else if(cyclingX <= -300){
        bikeLeftHit = true;
        bikeRightHit = false;
    }

    if(bikeLeftHit){
        bikeRight(x,y);
        cyclingX += 4;
    }else if(bikeRightHit){
        bikeLeft(x,y);
        cyclingX -= 4;
    }
}
    translate (cyclingX+x,y);
    scale(bikeScale(cycleScale));
    movingBike ();
    translate (-cyclingX+x,y);

}