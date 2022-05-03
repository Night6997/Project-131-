function backToHome2(){

    window.location="index.html";

}
img="";
stat="";

function preload(){

    img=loadImage("ClockImg.jpg");
    

}

function setup(){

    canvas=createCanvas(600,450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusClock").innerHTML="Object(s) are being detected";

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
    fill("#d11736");
    stroke("#d11736");
    text("Clock",103,71);
    noFill();
    rect(103,76,396,298);

    document.getElementById("RecognizedObjectsClock").innerHTML="COCOSSD has detected 1 clock";
}