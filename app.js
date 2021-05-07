// Declaring varaiables
const download = document.getElementById("download");
const message = document.getElementById("message");
const button = document.getElementById("button");
const clear = document.getElementById("clear");

// Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Printing text
button.onclick = () => {
    ctx.font = "30px Poppins";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(message.value, canvas.width / 2, canvas.height / 2);
}
// Clearing the canvas
clear.onclick = () => {
    ctx.clearRect(0, 0, 700, 400);
}

// Generating background image
function bg1() {
    var image = document.getElementById("bg1");
    ctx.drawImage(image, 0, 0, 700, 400);
}

function bg2() {
    var image = document.getElementById("bg2");
    ctx.drawImage(image, 0, 0, 700, 400);
}

function bg3() {
    var image = document.getElementById("bg3");
    ctx.drawImage(image, 0, 0, 700, 400);
}

function bg4() {
    var image = document.getElementById("bg4");
    ctx.drawImage(image, 0, 0, 700, 400);
}

function bg5() {
    var image = document.getElementById("bg5");
    ctx.drawImage(image, 0, 0, 700, 400);
}

function bg6() {
    var image = document.getElementById("bg6");
    ctx.drawImage(image, 0, 0, 700, 400);
}

function bg7() {
    var image = document.getElementById("bg7");
    ctx.drawImage(image, 0, 0, 700, 400);
}

function bg8() {
    var image = document.getElementById("bg8");
    ctx.drawImage(image, 0, 0, 700, 400);
}

// downloading the Greeting card
download.onclick = () => {
    var image = canvas.toDataURL("image/jpg");
    download.href = image;
};