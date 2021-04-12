let nameIn = document.querySelector(".nameInput");
let count = document.querySelector(".counting");
let language = document.querySelector(".langInput");
let greet = document.querySelector(".greeting");
let greetName = document.querySelector(".nameOutput");
let greetBtn = document.querySelector(".greetButton");

var counter = 0;


function greetExercise() {
    
    var radio = document.querySelector("input[name='radioGreet']:checked");

    var portGreet = "Olá, ";
    var swedGreet = "Hej, ";
    var japGreet = "こんにちは, ";
    
    if (nameIn.value == "") {
        
    } else {

        if (!radio) {
            greetName.innerHTML = nameIn.value;
            counter++;
        } else if (radio) {

            greetName.innerHTML = nameIn.value;

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

    }
    
    count.innerHTML = counter;
    nameIn.value = "";
    localStorage['tell'] = counter;
}

greetBtn.addEventListener('click', greetExercise);


if (localStorage['tell']) {
    counter = Number(localStorage['tell']);
}