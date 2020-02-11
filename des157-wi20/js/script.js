

function setup() {
    var myCanvas=createCanvas(800, 250);
    background(random(255), random(255),random(255));
    myCanvas.parent(mySketch);

    
}

function draw () {

stroke(255);

if(mouseIsPressed) {
    for (var i=0; i<width; i++) {
        ellipse(mouseX, mouseY, 50, 50);
    }
    fill (0); 
}

}



