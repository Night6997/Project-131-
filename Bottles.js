function backToHome3(){

    window.location="index.html";

}
img="";
stat="";

function preload(){

    img=loadImage("BottlesImg.jpg");
    

}

function setup(){

    canvas=createCanvas(600,450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusBottles").innerHTML="Object(s) are being detected";

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
    fill("#f59211");
    stroke("#f59211");
    text("Bottle",58,48);
    noFill();
    rect(58,53,155,302);

    fill("#f5cf11");
    stroke("#f5cf11");
    text("Bottle",220,48);
    noFill();
    rect(220,53,160,302);

    fill("#3ff511");
    stroke("#3ff511");
    text("Bottle",373,48);
    noFill();
    rect(373,53,147,302);

    document.getElementById("RecognizedObjectsBottles").innerHTML="COCOSSD has detected 3 bottles";
}