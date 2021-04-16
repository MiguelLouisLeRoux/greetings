let nameIn = document.querySelector(".nameInput");
let count = document.querySelector(".counting");
let language = document.querySelector(".langInput");
let greet = document.querySelector(".greeting");
let greetName = document.querySelector(".nameOutput");
let greetBtn = document.querySelector(".greetButton");
let clearBtn = document.querySelector(".clearButton");


var greetFactFunc = greetExerciseFactFunct();

function greetExercise() {

    var radio = document.querySelector("input[name='radioGreet']:checked");
    greetFactFunc.getName(nameIn.value);

    if (!radio) {

        greetFactFunc.greetCounts(greetFactFunc.values().theName);
        greet.innerHTML = greetFactFunc.values().theGreeting;
        setTimeout(function(){
            greetName.innerHTML = "";
            greet.innerHTML = "";
            }, 2000);

    } else if (radio) {
        
        greetFactFunc.radioCheck(radio.value);
        greet.innerHTML = greetFactFunc.values().theGreeting;
        setTimeout(function(){
            greetName.innerHTML = "";
            greet.innerHTML = "";
            }, 2000);

    }
    

    count.innerHTML = greetFactFunc.values().counting;
    nameIn.value = "";
    greetFactFunc.storage();

}

greetBtn.addEventListener('click', greetExercise);

count.innerHTML = localStorage['tell'];

if (localStorage['tell'] && localStorage['names']) {
    greetFactFunc.values().counting = Number(localStorage['tell']);
    greetFactFunc.values().objNames = JSON.parse((localStorage['names']));
}

function clearingButton() {

    greetFactFunc.clearingButtonFactFunc();
    localStorage['tell'] = greetFactFunc.values().counting;
    greetName.innerHTML = greetFactFunc.values().theGreeting;
    count.innerHTML = greetFactFunc.values().counting;
    
}

clearBtn.addEventListener('click', clearingButton);

