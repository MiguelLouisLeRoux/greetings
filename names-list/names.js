let namesL = document.querySelector(".names");

var factoryFunction = greetExerciseFactFunct();
var name12 = {}

if ( localStorage['names']) {
    name12 = JSON.parse((localStorage['names']));
}




for (const prop in name12) {
    
    var newDiv = document.createElement("div");
    var newText = document.createTextNode(prop + ": " + name12[prop]);
    newDiv.appendChild(newText);
    namesL.appendChild(newDiv);
}