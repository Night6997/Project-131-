function backToHome5(){

    window.location="index.html";

}
img="";
stat="";
objects=[];

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
        objects=results;

    }

}

function draw(){

    image(img,0,0,600,450);
    document.getElementById("statusTV").innerHTML="Object(s) dectected successfully";
    if(stat != ""){

        for(i=0; i<objects.length; i++){

            fill("#00ffff");
            stroke("#00ffff");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            rect(objects[i].y,objects[i].x,objects[i].width,objects[i].height);

        }

    }

    document.getElementById("RecognizedObjectsTV").innerHTML="COCOSSD has detected 1 TV";
}