let namesL = document.querySelector(".names");

var factoryFunction = greetExerciseFactFunct();
var name12 = {}
// namesL.innerHTML = JSON.stringify(factoryFunction.values().theNameList);

if ( localStorage['names']) {
    name12 = JSON.parse((localStorage['names']));
}

// factoryFunction.retrieve();

namesL.innerHTML = JSON.stringify(name12);

