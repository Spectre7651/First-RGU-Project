
function end(){
background(0,135,62);

textAlign (LEFT);
textSize(30);
fill (255);
// text

function endText1(){
text('Ways to be sustainable!',250,100);
}

function endText2(){
text("1.",150,200);
text("Pick up litter and recycle where possible!",200,200);
}

function endText3(){
text("2.",75,300);
text("Choose other modes of transport that isn't cars",100,300);
text("e.g. Bikes",800,300);
}

function endText4(){
text("3.",250,400);
text("Plant more flowers and trees!",300,400);
}

function finallyScene(){
stroke("black");
bike();

// tree
fill(127,81,18);
stroke(127,81,18);
rect (850,100,35,100);
fill(4,106,56);
stroke(4,106,56);
circle (835,100,50);
circle(870,100,50);
circle(900,100,50);
circle(855,70,50);
circle(880,70,50);
}

endText1();
endText2();
endText3();
endText4();
finallyScene();

}
