let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/cogwheel.png") {
        myImage.setAttribute("src", "images/cogwheel3.jpg");
    } else {
        myImage.setAttribute("src", "images/cogwheel.png");
    }
}


let myButton = document.querySelector("button");
let myHeader = document.querySelector("h1");

function setUserName() {
    let myName = prompt("enter your name");
    if(!myName) {
        setUserName();
    } else {
        myHeader.textContent = ("hello " + myName);
    }
}

myButton.onclick = function() {
    setUserName();
}