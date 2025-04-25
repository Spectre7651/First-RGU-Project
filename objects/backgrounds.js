
function park(){

    fill("white")
    stroke("white")
    function roadMarkings(x, y){
        translate(x, y);
        stroke(255, 255, 255);
        fill(255, 255, 255);
        rect(0, 50, 50, 15);
        translate(-x, -y);
  }
    function drawbackground() {
        background(49, 189, 210);
    
  
  
    //clouds
        x = 0
        y = 0
        x+=0.1;
        
        fill(255, 255, 255);
        rect(x + 45, 50, 150, 50, 15)
        rect(x + 20, 65, 100, 50, 15)
  
        rect(x +320, 25, 200, 55, 15)
        rect(x +360, 45, 200, 55, 15)
  
        rect(x + 900, 25, 150, 50, 15)
   
  
  
    //bushes
  
        stroke(32, 81, 18)
        fill(32, 81, 18)
        circle(680, 220, 350)
  
        stroke(32, 81, 18)
        fill(32, 81, 18)
        circle(315, 220, 350)
    
  
        stroke(44, 102, 30)
        fill(44, 102, 30)
        circle(150, 300, 350)  
  
        stroke(35, 174, 58)
        fill(35, 174, 58)
        circle(500, 300, 350)
  
        stroke(44, 102, 30)
        fill(44, 102, 30)
        circle(850, 300, 350)
  
   
    //pavement shadow
        stroke(43, 43, 43);
        fill(43, 43, 43);
        rect(0, 350, 1000, 550)
  
    //pavement
        stroke(158, 158, 158);
        fill(158, 158, 158);
        rect(0, 280, 1000, 70);
  
        stroke(110, 110, 100);
        fill(110, 110, 110);
        rect(0, 336, 1000, 15);
      
    
        roadMarkings(50, 365);
        roadMarkings(150, 365);
        roadMarkings(250, 365);
        roadMarkings(350, 365);
        roadMarkings(450, 365);
        roadMarkings(550, 365);
        roadMarkings(650, 365);
        roadMarkings(750, 365);
        roadMarkings(850, 365);
        roadMarkings(950, 365);
  }
  drawbackground()
}

function alleyWay(){
    function roadMarkings(x, y){
        translate(x, y)
        strokeWeight(1);
        fill(255, 255, 255);
        quad(385, 185 , 490, 155, 525, 170, 415, 200);
        translate(-x, -y);
          }
    
    function drawbackground(){
        
        background("lightgrey")

        ///distant road
        strokeWeight(200);
        stroke(110, 110, 100);
        stroke(43, 43, 43);
        line(85, 225, 500, 125);

        //roadmarkings
        roadMarkings(0, -50);
        roadMarkings(-150, 0);

        //pavement/floor

        strokeWeight(50);
        stroke(158, 158, 158);
        line(85, 350, 500, 250);

        strokeWeight(50);
        stroke(158, 158, 158);
        line(85, 350, 1000, 200);
  
        strokeWeight(1);
        stroke(158, 158, 158);
        fill(158, 158, 158);
        rect(0, 300, 1000, 500)

        //left side
        strokeWeight(1);
        stroke("grey");
        fill(85, 85, 85);
        rect (0, 0, 300, 500)

        strokeWeight(1);
        stroke("grey");
        fill("grey");
        rect(300, 0, 55, 325)
  
        strokeWeight(1);
        stroke("grey");
        fill("grey");
        triangle(300, 540, 300, 325, 355, 325);




        //right side
        strokeWeight(1);
        stroke(85, 85, 85);
        fill(85, 85, 85);
        rect(500, 0, 500, 300)
  
        strokeWeight(1);
        stroke(85, 85, 85);
        fill(85, 85, 85);
        triangle(500, 300, 1000, 300, 2000, 1000);

        //right side light
        strokeWeight(1);
        stroke("grey");
        fill("grey");
        rect(500, 0, 50, 300)

        triangle(500, 300, 550, 300, 550, 325);
        
      
        }
        drawbackground()

    }
    
    function binCloseup(){
      function drawbackground() {
        background(85, 85, 85);
      
        //lighting 1
      
        fill("grey");
        triangle(500, 1000, 585, -5 , 0, 650);
      
         //lighting2
         rect(500, 0, 500, 500);
        
      
        //trashcan
        strokeWeight(1);
        stroke(20, 110, 8);
        fill(20, 110, 8);
        quad(300, 300, 600, 300, 650, 400, 250, 400);
      
        rect(250, 400, 400, 100);
        
        strokeWeight(50);
        stroke(52, 151, 39);
        line(575, 300, 625, 400);
      
        //bin lighting
        fill(52, 151, 39);
        strokeWeight(0);
        rect(600, 400, 50, 100);
      
        fill(52, 151, 39);
        stroke(52, 151, 39);
        rect(325, 299, 250, 50);
      
        fill(26, 29, 26);
        quad(300, 375, 600, 375, 575, 315, 325, 315);
      
      
        //background
        fill("grey");
        rect(545, 250, 100, 50);
      
       
      
        //poster
        fill(85, 133, 78);
        rect(330, 0, 250, 285);
      
      
        //lighting
        fill(134, 185, 126);
        triangle(580, 0, 330, 285, 580, 285);
      
        //text
        fill(34, 98, 25);
        textSize(37);
        textAlign(RIGHT);
        textStyle(BOLD);
        text('YOU', 465, 40);
      
        fill(34, 98, 25);
        textSize(37);
        textAlign(RIGHT);
        textStyle(NORMAL);
        text('are', 525, 40);
        
        fill(34, 98, 25);
        textSize(37);
        textAlign(RIGHT);
        textStyle(NORMAL);
        text('responsible', 550, 80);
        
        fill(34, 98, 25);
        textSize(37);
        textAlign(RIGHT);
        textStyle(NORMAL);
        text('for', 475, 115);
      
        fill(34, 98, 25);
        textSize(37);
        textAlign(RIGHT);
        textStyle(BOLD);
        text('YOUR', 510, 150);
      
        fill(34, 98, 25);
        textSize(34);
        textAlign(RIGHT);
        textStyle(BOLD);
        text('ENVIRONMENT', 580, 185);
      
        //arrow
        fill(168, 35, 35);
        rect(450, 200, 25, 50);
      
        triangle(430, 245, 495, 245, 463, 285);
      }
      drawbackground()
    }

    function goodCity(){
        x = 100;
        y = 100;
    
        function roadMarkings(x, y){
        translate(x, y);
        strokeWeight(1);
        stroke(255, 255, 255);
        fill(255, 255, 255);
        rect(0, 50, 50, 15);
        translate(-x, -y);
    }
    
        function Windows(x,y){
            translate(x, y);
            strokeWeight(1);
            stroke(83, 123, 196);
            fill(168, 224, 255);
            square(0, 0, 25);
            translate(-x, -y);
    }
    
        function Balcony(x, y){
            translate(x, y);
            strokeWeight(2);
            stroke(80, 52, 15)
            fill(168, 224, 255);
            rect(222, 45, 55, 65);
    
            fill(114, 78, 31);
            rect(220, 80, 60, 35);
            translate(-x, -y);
    }
    
    
        function drawbackground() {
            background(49, 189, 210);
            strokeWeight(2);
            //cloud (animated)
            x+=0.1;
            fill(255, 255,255);
            stroke(255, 255, 255);
            rect(x + 750, 15, 100, 50, 15);
    
            fill(255, 255,255);
            stroke(255, 255, 255);
            rect(x+ 695, 25, 100, 50, 15);
    
            fill(255, 255,255);
            stroke(255, 255, 255);
            rect(x + 385, 10, 150, 55, 15);
    
            fill(255, 255,255);
            stroke(255, 255, 255);
            rect(x + 285, 25, 150, 55, 15);
    
            fill(255, 255,255);
            stroke(255, 255, 255);
            rect(x + 85, 25, 150, 40, 15);
    
            //backgroundroad
            stroke(43, 43, 43);
            fill(43, 43, 43);
            rect(0, 160, 1000, 550);
    
            //backgroundbuilding
            stroke(144, 106, 18);
            fill(144, 106, 18);
            rect(800, 95, 500, 55)
    
            //backgroundpavement
            stroke(110, 110, 110);
            fill(110, 110, 110);
            rect(0, 145, 1000, 15);
            
            //road
            stroke(43, 43, 43);
            fill(43, 43, 43);
            rect(0, 350, 1000, 550)
    
            //pavement
            stroke(158, 158, 158);
            fill(158, 158, 158);
            rect(0, 280, 1000, 70);
    
            stroke(158, 158, 158);
            fill(158, 158, 158);
            rect(800, 225, 200, 70);
    
        
    
            //road
            stroke(110, 110, 100);
            fill(110, 110, 110);
            rect(0, 336, 1000, 15);
        
            //roadmarkings
            roadMarkings(50, 365);
            roadMarkings(150, 365);
            roadMarkings(250, 365);
            roadMarkings(350, 365);
            roadMarkings(450, 365);
            roadMarkings(550, 365);
            roadMarkings(650, 365);
            roadMarkings(750, 365);
            roadMarkings(850, 365);
            roadMarkings(950, 365);
    
            //buildings (unable to use loop)
        
    
            fill(255, 245, 189);
            stroke(255, 245, 189);
            rect(0, -1, 200, 300);
    
            fill(212, 192, 146);
            stroke(212, 192, 146);
            rect(0, -3, 20, 300);
    
            fill(255, 245, 189);
            stroke(255, 245, 189);
            rect(300, 0, 200, 300);
    
        
            fill(188, 174, 103);
            stroke(188, 174, 103);
            rect(200, 0, 100, 250);
        
            fill(161, 134, 71);
            stroke(161, 134, 71);
            rect(280, 0, 20, 250);
      
            Balcony(0, 0);
    
            Balcony(-148, 75);
    
            //billboard
            stroke(80, 52, 15);
            fill(102, 78, 20);
            rect(200, 135, 100, 150);
    
            stroke(74, 55, 9);
            fill(74, 55, 9);
            rect(200, 135, 100, 25);
    
            stroke(74, 55, 9);
            fill(74, 55, 9);
            rect(275, 150, 25, 135);
            //building2 shadow
            fill(212, 192, 146);
            stroke(212, 192, 146);
            rect(300, 0, 20, 300);
    
            //building 2
            fill(255, 245, 189);
            stroke(255, 245, 189);
            rect(500, 100, 100, 200);
    
            //building 3
            stroke(198, 150, 108);
            fill(198, 150, 108);
            rect(600, 100, 200, 200);
    
            stroke(154, 112, 70);
            fill(154, 112, 70);
            rect(600, 100, 30, 200);
    
    
    
    
            //window building three
    
            fill(168, 215, 255);
            stroke(114, 169, 218);
            rect(630, 200, 55, 85);
    
    
            fill(168, 215, 255);
            stroke(114, 169, 218);
            rect(745, 200, 55, 85);
            
            fill(168, 215, 255);
            stroke(114, 169, 218);
            rect(680, 200, 70, 100);
    
    
            fill(114, 169, 218);
            stroke(114, 169, 218);
            rect(715, 200, 1, 100);
            
            //sign
            fill(240, 65, 95);
            stroke(240, 65,95);
            rect(635, 140, 160, 50);
    
            //sign shadow
            fill(185, 33, 58);
            stroke(185, 33, 58);
            rect(635, 140, 10, 50);
    
            //text on sign
            stroke(255, 255, 255);
            fill(255, 255, 255);
            textSize(25);
            textAlign(CENTER);
            text('STORE', 715, 175);
    
    
            //indows 1
            Windows(30, 15);
            Windows(90, 15);
            Windows(150, 15);
            Windows(30, 60);
            Windows(90, 60);
            Windows(150, 60);
            Windows(30, 105);
            Windows(150, 105);
            Windows(150, 160);
            Windows(30, 160);
    
            
            //door1
            fill(80, 52, 15);
            stroke(80, 52, 15);
            rect(75, 215, 50, 84);
    
            //windows2
            Windows(325, 15);
            Windows(385, 15);
            Windows(445, 15);
    
            Windows(325, 60);
            Windows(385, 60);
            Windows(445, 60);
    
            Windows(325, 105);
            Windows(385, 105);
            Windows(445, 105);
    
            Windows(325, 150);
            Windows(385, 150);
            Windows(445, 150);
            
            Windows(325, 195);
            Windows(385, 195);
            Windows(445, 195);
    
            //door2
            fill(50, 50, 50);
            stroke(50, 50, 50);
            rect(370, 240, 50, 60);
            
    
            //alleyway
            fill(50, 50, 50);
            stroke(50, 50, 50);
            rect(600, 100, 15, 200);
    
            //trashcan
            fill(0, 255, 0);
            stroke(0, 255, 0);
            rect(600, 280, 8, 20);
    
            //trashcan
            fill(0, 255, 0);
            stroke(0, 255, 0);
            rect(600, 280, 8, 20);
    

               // plants from windows
            fill(113,169,44);
            stroke(113,169,44);
            strokeWeight(2);
            circle(70,160,20);
            circle(85,160,20);
            circle(100,160,20);
            circle(115,160,20);
            circle(130,160,20);
            
            fill("purple");
            circle(70,155,5);
            circle(72,165,5);
            circle(85,160,5);
            circle(100,168,5);
            circle(96,159,5);
            circle(110,153,5);
            circle(120,158,5);
            circle(130,163,5);
    
            fill(0,154,68);
            stroke(0,154,68);
            strokeWeight(2);
            circle(220,85,20);
            circle(235,85,20);
            circle(250,85,20);
            circle(265,85,20);
            circle(280,85,20);
    
            fill("indigo");
            circle(215,83,5);
            circle(224,90,5);
            circle(240,86,5);
            circle(255,85,5);
            circle(263,88,5);
            circle(270,82,5);
            circle(280,85,5);
    
            // bike
            fill("black");
            stroke("black");
            circle(820,250,20);
            circle(870,250,20);
            stroke("pink");
            line(820,250,832,233);
            line(870,250,858,233);
            line(832,233,858,233);
            line(832,233,832,223);
            line(832,223,839,223);
            line(858,233,858,227);
            line(858,227,853,227);
            line(870,250,845,250);
            line(845,250,858,233);
            line(832,233,845,250);
    
            fill("black");
            stroke("black");
            circle(820,270,20);
            circle(870,270,20);
            stroke("yellow");
            line(820,270,832,253);
            line(870,270,858,253);
            line(832,253,858,253);
            line(832,253,832,243);
            line(832,243,839,243);
            line(858,253,858,247);
            line(858,247,853,247);
            line(870,270,845,270);
            line(845,270,858,253);
            line(832,253,845,270);
    
            fill("black");
            stroke("black");
            circle(820,290,20);
            circle(870,290,20);
            stroke("red");
            line(820,290,832,273);
            line(870,290,858,273);
            line(832,273,858,273);
            line(832,273,832,263);
            line(832,263,839,263);
            line(858,273,858,267);
            line(858,267,853,267);
            line(870,290,845,290);
            line(845,290,858,273);
            line(832,273,845,290);
             //poster
             fill(100, 188, 106);
             stroke(100, 188, 106);
             rect(485, 130, 100, 115);   
            //sign
            stroke(255, 255, 255);
            strokeWeight(0);
            fill(255, 255, 255);
            textSize(20);
            textAlign(CENTER);
            text('ON SALE!', 535, 165);
    
    
            textSize(18);
            text('REUSABLE', 535, 195);
    
            textSize(16);
            text('PRODUCTS!', 535, 225);

                // trees
                fill(102,65,40);
                stroke(102,73,50);
                rect(150,250,20,70);
                fill(108,147,92);
                stroke(108,147,92);
                circle(140,245,30);
                circle(160,245,30);
                circle(180,245,30);
                circle(150,225,30);
                circle(170,225,30);
                stroke(78,53,36);
                strokeWeight(4);
                line(145,320,175,320);
                
                fill(102,65,40);
                stroke(102,73,50);
                rect(450,250,20,70);
                fill(108,147,92);
                stroke(108,147,92);
                circle(440,245,30);
                circle(460,245,30);
                circle(480,245,30);
                circle(450,225,30);
                circle(470,225,30);
                stroke(78,53,36);
                strokeWeight(4);
                line(445,320,475,320);
            
                fill(102,65,40);
                stroke(102,73,50);
                rect(650,250,20,70);
                fill(108,147,92);
                stroke(108,147,92);
                    circle(640,245,30);
                    circle(660,245,30);
                    circle(680,245,30);
                    circle(650,225,30);
                    circle(670,225,30);
                    stroke(78,53,36);
                    strokeWeight(4);
                    line(645,320,675,320);

    }
    drawbackground()
    }

function sadCity(){
    let building = [["grey", "grey", "lightGrey", "grey", "grey", "lightGrey "],
                ["grey","grey", "grey","grey","grey","grey", "grey", "grey"],
                ["grey","grey", "grey","grey","grey","grey", "grey", "grey"]]

    x = 100;
    y = 100;

    function roadMarkings(x, y){
    translate(x, y);
    stroke(255, 255, 255);
    fill(255, 255, 255);
    rect(0, 50, 50, 15);
    translate(-x, -y);
    }

    function Windows(x,y){
        translate(x, y);
        stroke(158, 158, 158);
        fill(158, 158, 158);
        square(0, 0, 20);
        translate(-x, -y);
    }



    function drawbackground() {
    background(220);
    //sky
    //fill(137,207, 240);
    //rect(100, 0, 100, 100);

    //pavement shadow
    stroke(43, 43, 43);
    fill(43, 43, 43);
    rect(0, 350, 1000, 550)

    //pavement
    stroke(158, 158, 158);
    fill(158, 158, 158);
    rect(0, 280, 1000, 70);

    stroke(158, 158, 158);
    fill(158, 158, 158);
    rect(800, 225, 200, 70);

    //road
    stroke(110, 110, 100);
    fill(110, 110, 110);
    rect(0, 336, 1000, 15);
    
    //building
    for(let i=0; i<building.length;i++){
        for(let j=0; j<building[i].length;j++){
        stroke(building[i][j])
        fill(building[i][j])
        square((x*j),(y*i), 100);

    
        }
    }
    //windows 1
    Windows(30, 15);
    Windows(90, 15);
    Windows(150, 15);
    Windows(30, 60);
    Windows(90, 60);
    Windows(150, 60);
    Windows(30, 105);
    Windows(90, 105);
    Windows(150, 105);

    //roadmarkings
    roadMarkings(50, 365);
    roadMarkings(150, 365);
    roadMarkings(250, 365);
    roadMarkings(350, 365);
    roadMarkings(450, 365);
    roadMarkings(550, 365);
    roadMarkings(650, 365);
    roadMarkings(750, 365);
    roadMarkings(850, 365);
    roadMarkings(950, 365);

    //billboard
    stroke(160, 160, 160);
    fill(160, 160, 160);
    rect(200, 135, 100, 150);

    
    //door1
    fill(50, 50, 50);
    stroke(50, 50, 50);
    rect(75, 215, 50, 84);

    //windows2
    Windows(325, 15);
    Windows(385, 15);
    Windows(445, 15);

    Windows(325, 60);
    Windows(385, 60);
    Windows(445, 60);

    Windows(325, 105);
    Windows(385, 105);
    Windows(445, 105);

    Windows(325, 150);
    Windows(385, 150);
    Windows(445, 150);
    
    Windows(325, 195);
    Windows(385, 195);
    Windows(445, 195);

    //door2
    fill(50, 50, 50);
    stroke(50, 50, 50);
    rect(370, 240, 50, 60);
    

    //alleyway
    fill(50, 50, 50);
    stroke(50, 50, 50);
    rect(600, 100, 15, 200);

    //trashcan
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(600, 285, 8, 15)
}
drawbackground()
}