function backToHome5(){

    window.location="index.html";

}
img="";
stat="";

function preload(){

    img=loadImage("TVImg.jpg");
    

}

function setup(){

    canvas=createCanvas(600,450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusTV").innerHTML="Object(s) are being detected";

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
    fill("#008080");
    stroke("#008080");
    text("TV",142,130);
    noFill();
    rect(142,135,315,183);

    document.getElementById("RecognizedObjectsTV").innerHTML="COCOSSD has detected 1 TV";
}