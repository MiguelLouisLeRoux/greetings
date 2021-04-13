let nameIn = document.querySelector(".nameInput");
let count = document.querySelector(".counting");
let language = document.querySelector(".langInput");
let greet = document.querySelector(".greeting");
let greetName = document.querySelector(".nameOutput");
let greetBtn = document.querySelector(".greetButton");
let clearBtn = document.querySelector(".clearButton");


var counter = 0;
var namesList = {};

function greetExercise() {

    
    var radio = document.querySelector("input[name='radioGreet']:checked");

    var trim = nameIn.value.trim();

    var portGreet = "Olá, ";
    var swedGreet = "Hej, ";
    var japGreet = "こんにちは, ";
    
    if (nameIn.value == "") {
        
    } else {

        if (namesList[trim] === undefined) {

            if (!radio) {
                greetName.innerHTML = trim + " !";
                counter++;
            } else if (radio) {

                greetName.innerHTML = trim + " !";

                if (radio.value === "portuguese") {
                    greet.innerHTML = portGreet;
                    counter++;
                } else if (radio.value === "swedish") {
                    greet.innerHTML = swedGreet;
                    counter++;
                } else if (radio.value === "japanese") {
                    greet.innerHTML = japGreet;
                    counter++;
                }
            }

            namesList[nameIn.value] = 1;
        } else if (namesList.hasOwnProperty(trim)){

        }

    }
    
    count.innerHTML = counter;
    nameIn.value = "";
    localStorage['tell'] = counter;
    
}

greetBtn.addEventListener('click', greetExercise);

count.innerHTML = localStorage['tell'];

if (localStorage['tell']) {
    counter = Number(localStorage['tell']);
}


function clearingButton() {
    counter = 0;
    localStorage['tell'] = counter;
    greetName.innerHTML = "....";
    greet.innerHTML = "Hello, ";
    count.innerHTML = counter;

    namesList = {};
    
}

clearBtn.addEventListener('click', clearingButton);
