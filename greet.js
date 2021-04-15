let nameIn = document.querySelector(".nameInput");
let count = document.querySelector(".counting");
let language = document.querySelector(".langInput");
let greet = document.querySelector(".greeting");
let greetName = document.querySelector(".nameOutput");
let greetBtn = document.querySelector(".greetButton");
let clearBtn = document.querySelector(".clearButton");


var counter = 0;
var namesList = {};

var greetFactFunc = greetExerciseFactFunct();

function greetExercise() {

    
    var radio = document.querySelector("input[name='radioGreet']:checked");

    var trim = nameIn.value.trim();

    var portGreet = "Olá, ";
    var swedGreet = "Hej, ";
    var japGreet = "こんにちは, ";
    
    if (nameIn.value == "") {
        greetName.innerHTML = "Oops, you have not entered a name."
        setTimeout(function(){
        greetName.innerHTML = "";
        }, 2000);
    } else {

        if (namesList[trim] === undefined) {

            if (!radio) {
                greetName.innerHTML = "Hello, " + trim + " !";
                counter++;
                setTimeout(function(){
                    greetName.innerHTML = "";
                    }, 2000);
            } else if (radio) {

                greetName.innerHTML = trim + " !";

                if (radio.value === "portuguese") {
                    greet.innerHTML = portGreet;
                    counter++;
                    setTimeout(function(){
                        greetName.innerHTML = "";
                        greet.innerHTML = "";
                        }, 2000);
                } else if (radio.value === "swedish") {
                    greet.innerHTML = swedGreet;
                    counter++;
                    setTimeout(function(){
                        greetName.innerHTML = "";
                        greet.innerHTML = "";
                        }, 2000);
                } else if (radio.value === "japanese") {
                    greet.innerHTML = japGreet;
                    counter++;
                    setTimeout(function(){
                        greetName.innerHTML = "";
                        greet.innerHTML = "";
                        }, 2000);
                }
            }

            namesList[nameIn.value] = 1;
        } else if (namesList.hasOwnProperty(trim)){
            greetName.innerHTML = "You have already been greeted " + nameIn.value + ".";
            setTimeout(function(){
                greetName.innerHTML = "";
                greet.innerHTML = "";
                }, 2000);
        }

    }
    console.log(namesList);
    count.innerHTML = counter;
    nameIn.value = "";
    localStorage['tell'] = counter;
    localStorage['names'] = JSON.stringify(namesList);
    
}

greetBtn.addEventListener('click', greetExercise);

count.innerHTML = localStorage['tell'];

if (localStorage['tell'] && localStorage['names']) {
    counter = Number(localStorage['tell']);
    namesList = JSON.parse((localStorage['names']));
}

function clearingButton() {
    counter = 0;
    localStorage['tell'] = counter;
    greetName.innerHTML = "";
    greet.innerHTML = "";
    count.innerHTML = counter;

    namesList = {};
    
}

clearBtn.addEventListener('click', clearingButton);
