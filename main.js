feeling_good= ""; 
lets_dance= ""; 

leftWristX=0; 
leftWristY=0; 
rightWristX=0; 
rightWristY=0; 

function preload(){
    feeling_good= loadSound("Feeling Good - backing_converted (1).mp3");
    lets_dance= loadSound("Let's Dance - backing_converted (1).mp3");
}

function setup(){
    canvas= createCanvas(500,300); 
    canvas.center()

    video= createCapture(VIDEO); 
    video.hide(); 
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses); 
}

function modelLoaded(){
    console.log("The poseNet model is loaded"); 
}

function draw(){
    image(video, 0, 0, 600,500);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
        leftWristX= results[0].pose.leftWrist.x; 
        leftWristY= results[0].pose.leftWrist.y; 
        console.log("Left Wrist Coordinates: "+ leftWristX+","+leftWristY); 

        rightWristX= results[0].pose.rightWrist.x; 
        rightWristY= results[0].pose.rightWrist.y; 
        console.log("Right Wrist Coordinates: "+ rightWristX+","+rightWristY); 
    }
}