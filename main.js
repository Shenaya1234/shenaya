noseX = 0;
noseY = 0;
difference = 0;
leftHandX = 0;
rightHandX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('green');
    fill('pink');
    stroke('pink');
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftHandX = results[0].pose.leftWrist.X;
        rightHandX = results[0].pose.rightWrist.X;
        console.log("leftHandx = " + leftHandX + "rightHandX = " + rightHandX);
        difference = floor(leftHandX - rightHandX);
        console.log("difference" + difference)
    }
}