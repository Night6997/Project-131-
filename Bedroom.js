function backToHome1(){

    window.location="index.html";

}
img="";
stat="";

function preload(){

    img=loadImage("BedroomImg.jpg");
    

}

function setup(){

    canvas=createCanvas(600,450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusBedroom").innerHTML="Object(s) are being detected";

}

function modelLoaded(){

    console.log("Model loaded");
    stat=true;
    objectDetector.detect(img, gotResults);

}

function gotResults(error,results){

    if(error){

        console.log(error);

    }
    else{

        console.log(results);

    }

}

function draw(){

    image(img,0,0,600,450);
    fill("#00ffff");
    stroke("#00ffff");
    text("Bed",120,160);
    noFill();
    rect(120,165,360,285);

    fill("#ff69b4");
    stroke("#ff69b4");
    text("Lamp",120,200);
    noFill();
    rect(120,225,35,85);
    
    fill("#ff69b4");
    stroke("#ff69b4");
    text("Lamp",445,220);
    noFill();
    rect(445,225,35,85);

    fill("#dc143c");
    stroke("#dc143c");
    text("Light",350,10);
    noFill();
    rect(380,1,110,62);

    fill("#dc143c");
    stroke("#dc143c");
    text("Light",297,50);
    noFill();
    rect(213,1,110,35);

    fill("#dc143c");
    stroke("#dc143c");
    text("Light",68,10);
    noFill();
    rect(98,1,110,62);

    document.getElementById("RecognizedObjectsBedroom").innerHTML="COCOSSD has detected 1 bed, 2 lamps and 3 lights";
}