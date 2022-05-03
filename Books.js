function backToHome4(){

    window.location="index.html";

}
img="";
stat="";

function preload(){

    img=loadImage("BooksImg.jpg");
    

}

function setup(){

    canvas=createCanvas(600,450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusBooks").innerHTML="Object(s) are being detected";

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
    fill("#181954");
    stroke("#181954");
    text("Book",37,30);
    noFill();
    rect(68,20,493,175);

    fill("#ff00d5");
    stroke("#ff00d5");
    text("Book",37,147);
    noFill();
    rect(68,137,493,145);

    fill("#00ff8c");
    stroke("#00ff8c");
    text("Book",14,215);
    noFill();
    rect(45,205,483,163);

    fill("#fbff00");
    stroke("#fbff00");
    text("Book",32,292);
    noFill();
    rect(63,282,488,152);

    document.getElementById("RecognizedObjectsBooks").innerHTML="COCOSSD has detected 4 books";
}